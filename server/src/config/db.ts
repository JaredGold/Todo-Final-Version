const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'jared.goldstein',
    host: 'localhost',
    database: 'todo-app',
    password: 'password',
    port: 5432,
});

module.exports = pool;