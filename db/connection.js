const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  database: 'employees_db'
});

pool.connect();

module.exports = pool;