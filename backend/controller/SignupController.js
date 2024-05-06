const signupUser = require("../model/SignupModel");

exports.createUser = async (req, res) => {
  console.log("create user router called");
  try {
    const existsUsername = await signupUser.exists({
      username: req.body.username,
    });

    if (!existsUsername) {
        const user=new signupUser(req.body)
      await user.save();
      res.json({message:"suceessfull",signupStatus:true}).status(200);
    }
    else{
        res.json({message:"username already exists",signupStatus:false}).status(200)
    }
  } catch (error) {
    console.error(error.message);
    res.json({message:"Internal Server Error"}).status(500)
  }
};
