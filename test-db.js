
const pool = require('./db');

async function testConnection() {
  try {
    const [rows] = await pool.query('SELECT * FROM authors');
    console.log(rows);
  } catch (error) {
    console.error('Database connection failed:', error.message);
  } finally {
    await pool.end();
  }
}

testConnection();
