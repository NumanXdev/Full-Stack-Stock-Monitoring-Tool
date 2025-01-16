// 3
const User = require("../models/User.model");
const { createSecretToken } = require("../util/SecrectToken");

// -------------------------------------------------> Sign Up <----------------------------------------------------

module.exports.Signup = async (req, res, next) => {
  try {
    console.log("Request body Signup:", req.body);
    const { username, email, password, createdAt } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const user = await User.create({ username, email, password, createdAt });
    //   const user = new User({ username, email, password, createdAt });
    //   await user.save();

    const token = createSecretToken(user._id, user.username);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    console.log("signup token sent" + token);
    res.status(201).json({
      message: "User signed in successfully",
      success: true,
      user,
    });

    // next();
  } catch (error) {
    console.log(error);
  }
};

//5

const bcrypt = require("bcrypt");
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    console.log(user);
    const token = createSecretToken(user._id, user.username);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    console.log("Cookie login:", token);
    res.status(201).json({
      message: "User Logged in successfully",
      success: true,
    });

    // next();
  } catch (err) {
    console.error(err);
  }
};
