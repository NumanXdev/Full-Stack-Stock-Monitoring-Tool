const { model } = require("mongoose");

const { orderSchema } = require("../Schemas/ordersSchema");

const orderModel = new model("order", orderSchema);

module.exports = { orderModel };
