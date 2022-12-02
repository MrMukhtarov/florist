const mongoose = require("mongoose");

const instagramSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  profileName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Istagram", instagramSchema);
