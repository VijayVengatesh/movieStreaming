const BoxOffice = require("../model/BoxOffice");
const signupUser = require("../model/SignupModel");

exports.createUser = async (req, res) => {
  console.log("create user router called");
  try {
    const existsUsername = await signupUser.exists({
      username: req.body.username,
    });

    if (!existsUsername) {
      const user = new signupUser(req.body);
      await user.save();
      res.json({ message: "suceessfull", signupStatus: true }).status(200);
    } else {
      res
        .json({ message: "username already exists", signupStatus: false })
        .status(200);
    }
  } catch (error) {
    console.error(error.message);
    res.json({ message: "Internal Server Error" }).status(500);
  }
};

exports.userWithBoxoffice = async (req, res) => {
  console.log("userWithBoxoffice Router called");

  await BoxOffice.findById(req.params.movieId)
    .then((movie) => {
      signupUser
        .findByIdAndUpdate(
          "66388a70b59625d62eedadba",
          {
            $push: { watchMovie: movie },
          },
          { new: true }
        )
        .then((result) => {
          res.status(200).json(result)
        })
        .catch((err) => {
          res.json({ userwithmovieError: err });
        });
    })
    .catch((err) => {
      res.json({ movieError: err });
    });
};


exports.findUserWithMovies=async(req,res)=>{
  console.log("findUserWithMovies Router Called")

  const userWithMovies=await signupUser.findById(req.params.userId).populate({path:"watchMovie",select:"-__v"})
  res.send(userWithMovies)

}