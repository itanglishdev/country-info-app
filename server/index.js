const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
const express = require("express");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;

app.use(express.json());

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection successful");
  });

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Application is running on port ${port}...`);
});
