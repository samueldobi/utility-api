const express = require("express");
const dotenv = require("dotenv");
const mailerRoutes = require("./routes/mailerRoutes")


dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Mailer Routes 
app.use("/api", mailerRoutes)

// Routes
app.get("/", (req, res) => {
  res.send(" Backend is running...");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
