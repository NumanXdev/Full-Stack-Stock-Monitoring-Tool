// 2
require("dotenv").config;
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id,username) => {
  return jwt.sign({ id,username }, process.env.TOKEN_KEY, {
    expiresIn: 2 * 24 * 30 * 60,
  });
};
