const { stack } = require("../routes");

const errorHandler = (err, req, res, next) => {
  console.log("Error", err.message);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Something went wrong",
    stack: process.env.NODE_NEV === "development" ? err.stack : {},
  });
};

module.exports = errorHandler;
