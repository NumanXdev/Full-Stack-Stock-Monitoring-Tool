const { model } = require("mongoose");

const { HoldingSchema } = require("../Schemas/holdingSchema");
const HoldingModel = new model("Holding", HoldingSchema);

module.exports = { HoldingModel };
