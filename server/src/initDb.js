import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pool, { closePool } from './config/database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function initDb() {
  try {
    const schemaPath = path.join(__dirname, '..', 'schema.sql');
    const sql = fs.readFileSync(schemaPath, 'utf8');

    console.log('🔄 Connecting to database and running schema.sql...');
    await pool.query(sql);
    console.log('✅ Database initialized successfully! Table "enquiries" and indexes are ready.');
  } catch (err) {
    console.error('❌ Failed to initialize database:', err.message);
    console.error('\nPlease check that:');
    console.error('1. PostgreSQL is running.');
    console.error('2. The database specified in server/.env exists.');
    console.error('3. The username and password in server/.env are correct.');
  } finally {
    await closePool();
  }
}

initDb();
