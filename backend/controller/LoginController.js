const jwt = require("jsonwebtoken");
const signupUser = require("../model/SignupModel");

exports.checkuser = async (req, res) => {
  console.log("check user router called");

  try {
    const user = await signupUser.findOne({ username: req.body.username });

    if (user) {
        if (user.username===req.body.username && user.password === req.body.password) {
            const token=jwt.sign({userId:user._id},"netflix")
            res.json({message:"login successfully",loginStatus:true,token:token}).status(200)
        }
        else{
            res.json({message:"invalid username or password",loginStatus:false}).status(200)
        }
    } else {
      res.json({message:'user not found'}).status(200)
    }
  } catch (error) {
    console.error(error.message);
  }
};
