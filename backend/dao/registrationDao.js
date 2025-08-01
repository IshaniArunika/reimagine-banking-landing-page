const db = require("../config/db");

const insertRegistration = (data) => {
  return new Promise((resolve, reject) => {
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
      data.consent ? 1 : 0,
    ];

    db.run(query, values, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve({ id: this.lastID });
      }
    });
  });
};

const findByEmail = (email) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM registrations WHERE email = ?`;
    db.get(query, [email], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);  
      }
    });
  });
};

module.exports = {
  insertRegistration,
   findByEmail,  
};
