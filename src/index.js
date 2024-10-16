const express = require("express");

const { PORT } = require("./config/config");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome To Home Page...!");
});

app.listen(PORT, () => {
  console.log(`Environment :${process.env.NODE_ENV}`);
  console.log(`Server is running at port ${PORT}`);
});
