const mongoose = require("mongoose");
const plantSchema = new mongoose.Schema({
  name: String,
  picture: String,
  description: String,
  Plantid: Number,
  qr: String
});

const parkSchema = new mongoose.Schema({
    name: String,
    picture: String,
    description: String,
    Parkid: Number,
    number_registered_plants:Number
  });
  module.exports = {
    plantSchema,
    parkSchema
  };