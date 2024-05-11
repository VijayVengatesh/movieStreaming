const mongoose = require("mongoose");

const signupUser = mongoose.model(
  "signupUser",
  new mongoose.Schema({
    username: String,
    email: String,
    first_name: String,
    last_name: String,
    password: String,
  },{timestamps:true})
);

module.exports = signupUser;
