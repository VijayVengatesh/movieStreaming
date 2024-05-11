const multer = require("multer");
const BoxOffice = require("../model/BoxOffice");
const path = require("path");
const { error } = require("console");
let randomImage;
let randomVideo;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(path.join(__dirname, "..", "..", "src", "media", "images"));
    // console.log(file.mimetype);
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, path.join(__dirname, "..", "..", "src", "media", "images"));
    } else if (file.mimetype === "video/mp4") {
      cb(null, path.join(__dirname, "..", "..", "src", "media", "videos"));
    }
  },
  filename: (req, file, cb) => {
    console.log(path.extname(file.originalname));
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      randomImage = Date.now();
      console.log("image name", file.originalname);
      cb(null, randomImage + path.extname(file.originalname));
    } else if (file.mimetype === "video/mp4") {
      console.log("video name", file.originalname);
      randomVideo = Date.now();
      cb(null, randomVideo + path.extname(file.originalname));
    }
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 * 1024 },
});

exports.uploder = upload.array("upload_file", 2);

exports.insert = async (req, res) => {
  console.log("box office insert router called");
  console.log(req.files);
  const {
    movieName,
    releaseYear,
    ageLimit,
    movieType,
    duration,
    countryMovie,
    description,
    quvality,
    rating,
    director,
    cast,
  } = req.body;
  // console.log(movieName);
  // console.log(req.files)
  // console.log(req.body);
  const boxoffice = new BoxOffice({
    movieName: movieName,
    releaseYear: releaseYear,
    ageLimit: ageLimit,
    movieType: movieType,
    image: randomImage + path.extname(req.files[0].originalname),
    video: randomVideo + path.extname(req.files[1].originalname),
    duration: duration,
    countryMovie: countryMovie,
    description: description,
    quvality: quvality,
    rating: rating,
    director: director,
    cast: cast,
  });

  await boxoffice
    .save()
    .then((result) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err);
    });
};
exports.getBoxOfficeMovies = async (req, res) => {
  console.log("getBoxOfficeMovies Router called");
  await BoxOffice.find()
    .then((result) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err.message);
      res.send(err.message).status(200);
    });
};

exports.viewsIncrement = async (req, res) => {
  console.log("views incrent router called");
  await BoxOffice.findByIdAndUpdate(
    req.params.id,
    {
      $inc: { views: 1 },
    },
    { new: true }
  )
    .then((result) => {
      res.send(result).status(200)
    })
    .catch((err) => {
      res.send(err).status(200)
    });
};

exports.likesIncrement = async (req, res) => {
  console.log("likes increment router called");
  await BoxOffice.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } },{new:true})
  .then(result=>{
    res.send(result).status(200)
  })
  .catch(err=>{
    res.send(err).status(200)
  })
};

exports.likesdecrement = async (req, res) => {
  console.log("likes increment router called");
  await BoxOffice.findByIdAndUpdate(req.params.id, { $inc: { likes: -1 } },{new:true})
  .then(result=>{
    res.send(result).status(200)
  })
  .catch(err=>{
    res.send(err).status(200)
  })
};

exports.findSingleMoovie = async (req, res) => {
  console.log("findsinle movie router called");
  await BoxOffice.findById({ _id: req.params.id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.popularMovies = async (req, res) => {
  console.log("popularmoives router called");
  const result = await BoxOffice.find();
  res.send(result);
};
