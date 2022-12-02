const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema({
  icon1: {
    type: String,
    required: true,
  },
  icon2: {
    type: String,
    required: true,
  },
  icon3: {
    type: String,
    required: true,
  },
  icon4: {
    type: String,
    required: true,
  },
  address: {
    type: Date,
    required: true,
  },
  number1: {
    type: Date,
    required: true,
  },
  number2: {
    type: Date,
    required: true,
  },
  email: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Setting", settingsSchema);
