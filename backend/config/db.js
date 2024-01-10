import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const DB_NAME = process.env.POSTGRES_DATABASE
const DB_USER = process.env.POSTGRES_USER
const DB_PASS = process.env.POSTGRES_PASSWORD
const DB_HOST = process.env.POSTGRES_HOST

export const masterPool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASS,
    port: 5432
});

export const appPool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASS,
    port: 5432
});
