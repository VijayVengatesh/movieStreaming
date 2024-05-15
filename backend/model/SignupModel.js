const mongoose = require("mongoose");

const signupUser = mongoose.model(
  "signupUser",
  new mongoose.Schema({
    username: String,
    email: String,
    first_name: String,
    last_name: String,
    password: String,
    watchMovie:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Boxoffice"
      }
    ]
  },{timestamps:true})
);

module.exports = signupUser;
