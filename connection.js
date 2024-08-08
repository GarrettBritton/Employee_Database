const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  database: 'employees_db'
});

client.connect();

module.exports = client;