const registerDAO = require("../dao/registrationDao");

const registerUser = async (req, res) => {
  const {
    firstName, lastName, jobTitle,
    company, mobile, email, website, consent
  } = req.body;

  //  validation checks
  if (!firstName) {
    return res.status(400).json({ error: "First name is required." });
  }

  if (!lastName) {
    return res.status(400).json({ error: "Last name is required." });
  }

  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  if (consent !== true) {
    return res.status(400).json({ error: "Consent must be given." });
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  try {
    // Check if email already exists
    const existingUser = await registerDAO.findByEmail(email);
    if (existingUser) {
      return res.status(409).json({ error: "Email already registered." });
    }

    // Insert new registration
    const result = await registerDAO.insertRegistration(req.body);
    res.status(201).json({ message: "Registration successful", id: result.id });

  } catch (err) {
    console.error("Error saving user:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { registerUser };
