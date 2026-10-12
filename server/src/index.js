import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import pool, { closePool } from './config/database.js';

const PORT = process.env.PORT || 5000;

// Test database connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.warn('⚠️ Warning: PostgreSQL database is not reachable at the configured DATABASE_URL.');
        console.warn('   Please ensure PostgreSQL is running and DATABASE_URL is set correctly in .env.');
        console.warn('   Details:', err.message);
    } else {
        console.log('Database connected successfully at:', res.rows[0].now);
    }
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Graceful shutdown
const shutdown = async () => {
    console.log('Shutting down server gracefully...');
    server.close(async () => {
        console.log('HTTP server closed.');
        try {
            await closePool();
            console.log('Database pool closed.');
        } catch (err) {
            console.error('Error during pool closure:', err);
        }
        process.exit(0);
    });

    // Fallback: force close after 10s
    setTimeout(() => {
        console.error('Could not close connections in time, forcefully shutting down');
        process.exit(1);
    }, 10000);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
