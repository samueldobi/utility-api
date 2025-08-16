const express = require("express");
const dotenv = require("dotenv");
const mailerRoutes = require("./routes/mailerRoutes")
const cors = require("cors");

app.use(cors({
    origin: ["http://localhost:5173", "https://your-netlify-app.netlify.app"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));

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
