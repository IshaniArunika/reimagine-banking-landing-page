const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "../database.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Failed to connect to SQLite DB:", err);
  } else {
    console.log("Connected to SQLite database.");
  }
});

// Ensure the table exists
db.run(`
  CREATE TABLE IF NOT EXISTS registrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT,
    last_name TEXT,
    job_title TEXT,
    company TEXT,
    mobile TEXT,
    email TEXT,
    website TEXT,
    consent INTEGER
  )
`);

module.exports = db;
