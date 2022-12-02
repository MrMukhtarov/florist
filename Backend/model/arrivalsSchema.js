const mongoose = require("mongoose");

const arrivalScema = new mongoose.Schema({
  status: {
    type: String,
  },
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Arrivals", arrivalScema);
