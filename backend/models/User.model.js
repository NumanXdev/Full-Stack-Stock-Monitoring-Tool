// 1
const mongoose = require(mongoose);
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Your Username is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Your Email address is required"],
  },
  password: {
    type: String,
    required: [true, "Your Password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});


// The 12 is the salt rounds, a value determining the complexity of the hashing process

userSchema.pre("save", async () => {
  this.password = await bcrypt.hash(this.password, 12);
});

const user = mongoose.model("user", userSchema);
module.exports = user;
