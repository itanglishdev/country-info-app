const mongoose = require("mongoose");
// const {Schema} = mongoose

const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A country must have a name"],
    unique: true,
  },
  topLevelDomain: {
    type: [],
    required: [true, "A country must have top level domain"],
  },
  callingCodes: {
    type: [],
    required: [true, "A country must have a calling code"],
  },
  capital: {
    type: String,
  },
  altSpellings: {
    type: [],
    required: [true, "A country must have alt spellings"],
  },
  subregion: {
    type: String,
    required: [true, "A country must have sub region"],
  },
  region: {
    type: String,
    required: [true, "A country must have region"],
  },
  population: {
    type: Number,
    required: [true, "A country must have a population"],
  },
  latlng: {
    type: [],
    required: [true, "A country must have latitude and longitude"],
  },
  area: {
    type: Number,
    required: false,
  },
  timezones: {
    type: [],
    required: [true, "A country must have time zone"],
  },
  borders: {
    type: [],
    required: [true, "A country must have borders"],
  },
  nativeName: {
    type: String,
    required: [true, "A country must have a native name"],
  },
  nummericCode: {
    type: String,
    required: false,
  },
  currencies: {
    type: [],
    required: [true, "A country must have a currency"],
  },
  languages: {
    type: [],
    required: [true, "A country must have languages"],
  },
  flag: {
    type: String,
    required: [true, "A country must have a flag"],
  },
  independent: {
    type: Boolean,
    required: false,
  },
});

// const testSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "A user must have a name"],
//     unique: true,
//   },

//   age: {
//     type: Number,
//     required: [true, "User's age must be defined"],
//   },

//   nationality: {
//     type: String,
//     required: false,
//     default: "German",
//   },

//   langauges: {
//     type: [],
//     required: false,
//   },
// });

const CountryModel = mongoose.model("CountryModel", countrySchema);

module.exports = CountryModel;

// This is also possible
// module.exports = mongoose.model("CountryModel", countrySchema);
