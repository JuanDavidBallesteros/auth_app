const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    isAdmin: Boolean,
    username: String,
    password: String,
    lastIngress: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', user);
