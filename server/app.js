const express = require("express");
const CountryModel = require("./models/CountryModel");

const app = express();
const cors = require("cors");

app.use(cors());

app.get("/api/v1/country-info", async (req, res) => {
  try {
    const countryData = await CountryModel.find();

    res.status(200).json({
      status: "success",
      result: countryData.length,
      data: {
        countryData,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
});

module.exports = app;
