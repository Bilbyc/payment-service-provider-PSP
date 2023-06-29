import { Pool } from 'pg'

const {
  DB_USER,
  DB_HOST,
  DB_DATABASE,
  DB_PASS,
  DB_PORT
} = process.env

export const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_DATABASE,
  password: DB_PASS,
  port: Number(DB_PORT),
  max: 5,
  connectionTimeoutMillis: 20000,
  idleTimeoutMillis: 20000,
  allowExitOnIdle: false
})
