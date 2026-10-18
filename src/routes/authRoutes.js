const express = require("express");
const router = express.Router();
const limiter = require("../utils/limiter");
const authMiddleware = require("../middleware/authMiddleware");
const {Signin, Login, Me, Logout} = require("../controllers/auth");

router.post("/signin", limiter, Signin);
router.post("/login", limiter, Login);
router.post("/logout", authMiddleware, limiter, Logout);
router.get("/me", authMiddleware, limiter, Me);


module.exports = router;