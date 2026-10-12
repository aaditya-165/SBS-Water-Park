import pool, { closePool } from './config/database.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function viewEnquiries() {
  console.log('\n======================================================');
  console.log('📋 SBS WATER PARK — SUBMITTED CUSTOMER ENQUIRIES');
  console.log('======================================================\n');

  try {
    const result = await pool.query('SELECT * FROM enquiries ORDER BY created_at DESC;');
    
    if (result.rows.length === 0) {
      console.log('No enquiries found in the PostgreSQL database yet.\n');
    } else {
      console.log(`Found ${result.rows.length} enquiry(ies) in database:\n`);
      console.table(result.rows.map(row => ({
        ID: row.id,
        Name: row.name,
        Phone: row.phone,
        Email: row.email || '-',
        Type: row.enquiry_type,
        People: row.number_of_people || '-',
        Date: row.preferred_date ? new Date(row.preferred_date).toLocaleDateString() : '-',
        Message: row.message ? (row.message.length > 30 ? row.message.substring(0, 30) + '...' : row.message) : '-',
        Submitted: new Date(row.created_at).toLocaleString()
      })));
    }
  } catch (dbError) {
    console.warn('⚠️ Could not connect to PostgreSQL:', dbError.message);
  }

  // Also check fallback file
  const backupFile = path.join(__dirname, '..', 'data', 'enquiries_backup.json');
  if (fs.existsSync(backupFile)) {
    try {
      const backupData = JSON.parse(fs.readFileSync(backupFile, 'utf8'));
      if (backupData.length > 0) {
        console.log(`\n📁 Additional ${backupData.length} enquiry(ies) found in local backup file (server/data/enquiries_backup.json):\n`);
        console.table(backupData.map(item => ({
          ID: item.id,
          Name: item.name,
          Phone: item.phone,
          Email: item.email || '-',
          Type: item.enquiryType,
          People: item.numberOfPeople || '-',
          Date: item.preferredDate || '-',
          Submitted: new Date(item.created_at).toLocaleString()
        })));
      }
    } catch (e) {}
  }

  console.log('\n======================================================\n');
  await closePool();
}

viewEnquiries();
