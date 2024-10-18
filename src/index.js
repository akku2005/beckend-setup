const express = require("express");
const { PORT } = require("./config/config");
const connectDB = require("./config/db");

const routes = require("./routes/index");
const logger = require("./config/logger");
const { cyan, green } = require("colorette");

const errorHandler = require("./middlewares/errorHandler");
const notFoundHandler = require("./middlewares/notFoundHandler");

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  logger.info("Home route is accessed..!");
  res.send("Welcome To Home Page...!");
});

// API routes mounted at /api
app.use("/api", routes);

// Not Found Handler - For unmatched routes
app.use(notFoundHandler);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(cyan(`Environment: ${process.env.NODE_ENV}`));
  console.log(green(`Server is running at port ${PORT}`));
});
