require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbConnection = require("./src/config/dbConnection");
const authRoutes = require("./src/routes/authRoutes");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000", "https://galaxybets.casino"],
    credentials: true,
}));
app.use(cookieParser());

// Routes
app.get("/", async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server Running Successfully"
    });
});
app.use("/api/auth", authRoutes);

// Mongoose Connection
dbConnection();

app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server Running on Port ${PORT} ✅✅`);
    }
});