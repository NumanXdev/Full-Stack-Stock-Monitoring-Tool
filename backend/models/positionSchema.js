const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const positionSchema = new Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});
const Position = mongoose.model("position", positionSchema);
module.exports = Position;
