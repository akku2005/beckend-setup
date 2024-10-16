const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: ["user-1", "user-2"] });
});

router.get("/error", (req, res) => {
  throw new Error("Internal error for testing the global error handler");
});

module.exports = router;
