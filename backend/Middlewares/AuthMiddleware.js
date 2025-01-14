//6

require("dotenv").config;
const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  console.log("Authiddleware token " + token);
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      console.error("JWT Verification Error:", err);
      return res.json({ status: false });
    } else {
      // console.log("data"+data); //{ id: '678246dd34e81904278627fb', iat: 1736591070, exp: 1736677470 }
      console.log("data-id" + data.id); //678246dd34e81904278627fb
      const user = await User.findById(data.id);
      console.log("Auth Middleware user" + user);
      if (user) {
        return res.json({ status: true, user: user.username });
      } else {
        return res.json({ status: false });
      }
    }
  });
};
