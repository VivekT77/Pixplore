const express = require('express');
const router = express.Router();

const { signup, login } = require("../controllers/Auth");
const { auth, isAdmin } = require("../middlewares/auth");

// Authentication routes 
router.post("/signup", signup);
router.post("/login", login);

// Example of a protected route for authenticated users
router.get("/dashboard", auth, (req, res) => {
  res.json({ message: "Welcome to the user dashboard" });
});

// Example of a protected route for admins only
router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({ message: "Welcome to the admin panel" });
});

module.exports = router;
