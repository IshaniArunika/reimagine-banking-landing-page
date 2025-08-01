const express = require("express");
const cors = require("cors");
const registerRoutes = require("./routes/registrationRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/register", registerRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
