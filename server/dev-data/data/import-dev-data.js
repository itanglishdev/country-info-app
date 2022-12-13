const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const CountryModel = require("../../models/CountryModel");

dotenv.config({ path: "../../config.env" });

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection successful");
  });

// Read the JSON data

const countryData = JSON.parse(
  fs.readFileSync("./countries-data.json", "utf-8")
);

// const testData = JSON.parse(fs.readFileSync("./test-data.json", "utf-8"));

// Import data into the DB

const importData = async () => {
  try {
    await CountryModel.create(countryData);
    console.log("Data loaded sucessfully");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await CountryModel.deleteMany();
    console.log("Data deleted sucessfully");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
