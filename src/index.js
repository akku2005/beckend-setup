const express = require("express");

const { PORT } = require("./config/config");

const routes = require("./routes");

const errorHandler = require("./middlewares/errorHandler");
const notFoundHandler = require("./middlewares/notFoundHandler");

const app = express();

app.use(express.json());

app.use("/", routes);

app.use(notFoundHandler);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Welcome To Home Page...!");
});

app.listen(PORT, () => {
  console.log(`Environment :${process.env.NODE_ENV}`);
  console.log(`Server is running at port ${PORT}`);
});
