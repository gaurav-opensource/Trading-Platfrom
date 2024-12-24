const express = require("express");
const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const protect = require("../middlwaer/authMiddlewaer");

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
    console.log("Received data:", req.body);  // Log incoming request data
    const { username,  email, password, phone } = req.body;
    try {
      const user = await User.create({ username, email, password, phone });
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
      res.json({ token, user });
    } catch (error) {
      console.error("Registration error:", error);  // Log error details
      res.status(400).json({ error: "User registration failed" });
    }
  });
  

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ token, user });
  } catch (error) {
    res.status(400).json({ error: "Login failed" });
  }
});

// Profile
router.get("/profile", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch profile" });
  }
});

module.exports = router;
