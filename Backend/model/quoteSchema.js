const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  type_services: {
    type: String,
    required: true,
  },
  message: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Quote", quoteSchema);
