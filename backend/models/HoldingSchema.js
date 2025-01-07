const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HoldingSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

const Holding = mongoose.model("Holding", HoldingSchema);
module.exports = Holding;
