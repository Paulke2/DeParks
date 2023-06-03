const mongoose = require("mongoose");
const parkSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: String,
    description: String,
    Parkid: { type: Number, required: true },
    location: String,
    plants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Plant" }]
  }
);

module.exports = mongoose.model("Park", parkSchema);