import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pool from '../config/database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createEnquiry = async (data) => {
    try {
        const query = `
            INSERT INTO enquiries (
                name, phone, email, enquiry_type, organization, 
                number_of_people, number_of_students, number_of_teachers, 
                preferred_date, selected_package, message, source_page
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12
            ) RETURNING *;
        `;

        const values = [
            data.name,
            data.phone,
            data.email,
            data.enquiryType,
            data.organization,
            data.numberOfPeople,
            data.numberOfStudents,
            data.numberOfTeachers,
            data.preferredDate,
            data.selectedPackage,
            data.message,
            data.sourcePage
        ];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (dbError) {
        console.warn('⚠️ Database query failed (PostgreSQL may be offline or uninitialized):', dbError.message);
        console.log('📁 Storing enquiry into local backup file storage...');

        // Fallback store to enquiries_backup.json so NO customer enquiry is ever lost
        const backupDir = path.join(__dirname, '..', '..', 'data');
        const backupFile = path.join(backupDir, 'enquiries_backup.json');

        if (!fs.existsSync(backupDir)) {
            fs.mkdirSync(backupDir, { recursive: true });
        }

        const enquiryRecord = {
            id: Date.now(),
            ...data,
            created_at: new Date().toISOString(),
            saved_via: 'local_backup_fallback'
        };

        let existing = [];
        if (fs.existsSync(backupFile)) {
            try {
                existing = JSON.parse(fs.readFileSync(backupFile, 'utf8'));
            } catch (e) {
                existing = [];
            }
        }

        existing.push(enquiryRecord);
        fs.writeFileSync(backupFile, JSON.stringify(existing, null, 2));

        console.log('✅ Enquiry securely saved to fallback file:', backupFile);
        return enquiryRecord;
    }
};

export const getEnquiries = async () => {
    let dbRows = [];
    try {
        const result = await pool.query('SELECT * FROM enquiries ORDER BY created_at DESC;');
        dbRows = result.rows;
    } catch (err) {
        console.warn('⚠️ Could not query PostgreSQL for enquiries:', err.message);
    }

    // Merge any fallback file entries if present and not in DB
    const backupDir = path.join(__dirname, '..', '..', 'data');
    const backupFile = path.join(backupDir, 'enquiries_backup.json');
    let fallbackRows = [];
    if (fs.existsSync(backupFile)) {
        try {
            fallbackRows = JSON.parse(fs.readFileSync(backupFile, 'utf8'));
        } catch (e) {
            fallbackRows = [];
        }
    }

    return {
        total: dbRows.length + fallbackRows.length,
        enquiries: [...dbRows, ...fallbackRows]
    };
};
