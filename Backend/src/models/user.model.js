const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  passwordConfirmation: {
    type: String,
    required: true,
    minLength: 8,
  },
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
