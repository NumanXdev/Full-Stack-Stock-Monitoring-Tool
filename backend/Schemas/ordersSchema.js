const { Schema } = require("mongoose");

const ordersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

module.exports = { ordersSchema };
