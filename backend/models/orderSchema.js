const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});
const Order = mongoose.model("order", orderSchema);
module.exports = Order;
