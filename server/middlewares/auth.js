const jwt = require('jsonwebtoken');
require("dotenv").config();

// Auth Middleware
exports.auth = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.body.token || req.header("Authorization")?.replace("Bearer ", "");
    
    if (!token) {
      return res.status(401).json({ success: false, message: "Token is missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded user data to the request object
    next();
  } catch (error) {
    console.error("Error during token verification:", error);
    return res.status(401).json({ success: false, message: "Invalid or missing token" });
  }
};

// Admin Role Check Middleware
exports.isAdmin = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Admin") {
      return res.status(403).json({
        success: false,
        message: 'This route is restricted to Admins only',
      });
    }
    next();
  } catch (error) {
    console.error("Error during admin check:", error);
    return res.status(500).json({
      success: false,
      message: 'Unable to verify user role',
    });
  }
};

// Creator Role Check Middleware
exports.isCreator = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Creator") {
      return res.status(403).json({
        success: false,
        message: 'This route is restricted to Creators only',
      });
    }
    next();
  } catch (error) {
    console.error("Error during creator check:", error);
    return res.status(500).json({
      success: false,
      message: 'Unable to verify user role',
    });
  }
};
