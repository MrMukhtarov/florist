const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("category", categorySchema);
