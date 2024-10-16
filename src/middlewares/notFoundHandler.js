const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalURl} not found`,
  });
};

module.exports = notFoundHandler;
