const mongoose = require("mongoose");
const Plant = require("./plantModel.js");
const plantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: String,
    description: String,
    Plantid: { type: Number, required: true },
    qr: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Plant", plantSchema);
