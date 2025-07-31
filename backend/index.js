const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Connect to SQLite database (creates file if not exists)
const dbPath = path.resolve(__dirname, "database.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error opening SQLite DB:", err);
  } else {
    console.log("Connected to SQLite database.");
  }
});

// Create the table if it doesn't exist
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

// Handle form submission
app.post("/register", (req, res) => {
  const data = req.body;

  const query = `
    INSERT INTO registrations 
    (first_name, last_name, job_title, company, mobile, email, website, consent) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    data.firstName,
    data.lastName,
    data.jobTitle,
    data.company,
    data.mobile,
    data.email,
    data.website,
    data.consent ? 1 : 0, // SQLite uses 0/1 for boolean
  ];

  db.run(query, values, function (err) {
    if (err) {
      console.error("Insert error:", err.message);
      res.status(500).json({ message: "Failed to save data." });
    } else {
      res.json({ message: "Registration successful!", id: this.lastID });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
