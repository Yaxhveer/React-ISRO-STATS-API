import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT

export const masterPool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASS,
    port: DB_PORT
});

export const appPool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASS,
    port: DB_PORT
});
