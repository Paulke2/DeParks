const mongoose = require("mongoose");
const plantSchema = new mongoose.Schema({
  name: String,
  picture: String,
  description: String,
  Plantid: Number,
  qr: String
});

module.exports = mongoose.model('Plant',plantSchema);