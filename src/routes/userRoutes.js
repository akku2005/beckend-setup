const express = require("express");
const router = express.Router();
const logger = require("../config/logger");
const User = require("../models/user");

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });

    await newUser.save();
    logger.info("New user created: " + email);

    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    logger.error("User creation failed: " + error.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
