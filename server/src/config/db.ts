import { Pool } from 'pg';

export const db = new Pool({
  user: 'jared.goldstein',
  host: 'localhost',
  database: 'todo-app',
  password: 'password',
  port: 5432,
});
