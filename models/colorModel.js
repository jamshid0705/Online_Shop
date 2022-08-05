const mongoose = require("mongoose");
const colorSchema = new mongoose.Schema({
  color: {
    type: String,
    required: [true, "Siz size kiriting !"],
    enum: ["While", "Green", "Black", "Red", "Blue"],
  },
});

const color = mongoose.model("colors", colorSchema);
module.exports = color;
