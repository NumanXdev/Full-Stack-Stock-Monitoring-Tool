const { model } = require("mongoose");

const { HoldingsSchema } = require("../Schemas/HoldingSchema");

const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = { HoldingsModel };