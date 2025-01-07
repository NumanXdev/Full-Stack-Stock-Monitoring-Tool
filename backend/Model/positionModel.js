const { model } = require("mongoose");

const { positionSchema } = require("../Schemas/positionSchema");

const positionModel = new model("position", positionSchema);

module.exports = { positionModel };
