const express = require("express");
const dotenv = require("dotenv");
const mailerRoutes = require("./routes/mailerRoutes")
const cors = require("cors");

dotenv.config();

app.use(cors({
    origin: ["http://localhost:5173", "https://innovadigitaltech.com/"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));

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
