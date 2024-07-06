const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.headers["authorization"];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};

module.exports = authMiddleware;
