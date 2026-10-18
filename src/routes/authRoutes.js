const express = require("express");
const router = express.Router();
const limiter = require("../utils/limiter");
const authMiddleware = require("../middleware/authMiddleware");
const {Signin, Login, Me, Logout} = require("../controllers/authRoutes");

router.post("/sigin", limiter, Signin);
router.post("/login", limiter, Login);
router.post("/logout", authMiddleware, limiter, Logout);
router.get("/me", authMiddleware, limiter, Me);


module.exports = router;