const express = require("express");
const dotenv = require("dotenv");
const mailerRoutes = require("./routes/mailerRoutes");
const cors = require("cors");
const http = require("http");
const setupSocket = require("./utilities/socketServer");

dotenv.config();

const app = express();

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:3000", "https://innovadigitaltech.com/"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));



// Middleware
app.use(express.json());

// Mailer Routes 
app.use("/api", mailerRoutes)
const server = http.createServer(app);
setupSocket(server); 

// Routes
app.get("/", (req, res) => {
  res.send(" Backend is running...");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server + WebSocket is  running on port ${PORT}`);
});
