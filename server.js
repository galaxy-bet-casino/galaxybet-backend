require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.get("/", async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server Running Successfully"
    });
});

app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server Running on Port ${PORT} ✅✅`);
    }
});