import fs from "fs";
import { masterPool, appPool } from "./backend/config/db.js"; 
import dotenv from "dotenv";

dotenv.config({ path: './backend/.env' });

const dbName = process.env.POSTGRES_DATABASE;
const schemaPath = './backend/schema/schema.sql';

const createDatabaseAndSchema = async () => {
    try {

        const result = await masterPool.query(
            'SELECT datname FROM pg_database WHERE datname = $1',
            [dbName]
        );

        if (result.rows.length > 0) {
            console.log(`Database '${dbName}' exists.`);
        } else {
            await masterPool.query(`CREATE DATABASE ${dbName}`);
        }

        const pool = appPool;

        const schemaSql = fs.readFileSync(schemaPath, 'utf-8');
        await pool.query(schemaSql);

        console.log('Database and schema created successfully!');
    } catch (error) {
        console.error('Error creating database and schema:', error);
    } finally {
        masterPool.end();
        appPool.end();
    }
};

createDatabaseAndSchema();
