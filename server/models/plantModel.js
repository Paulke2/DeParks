const mongoose = require("mongoose");
const plantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    picture: String,
    description: String,
    Plantid: { type: Number, required: true },
    qr: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Plant", plantSchema);
