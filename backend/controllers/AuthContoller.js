// 3
const User = require("../models/User.model");
const { createSecretToken } = require("../util/SecrectToken");
// const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { username, email, password, createdAt } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const user = await User.create({ username, email, password, createdAt });
    //   const user = new User({ username, email, password, createdAt });
    //   await user.save();

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });

    next();
  } catch (error) {
    console.log(error);
  }
};
