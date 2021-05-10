const mongoose = require('mongoose');

const UserRegisterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
    lowercase: false
  },
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
});

const UserRegister = mongoose.model("user-register", UserRegisterSchema);
module.exports = UserRegister;