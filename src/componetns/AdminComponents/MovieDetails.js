import axios from "axios";
import { useEffect, useState } from "react";

function MovieDetails() {
  const [allMovies, setAllMovies] = useState();
  const [movieDetails, setMovidetails] = useState({
    movieName: "",
    releaseYear: "",
    ageLimit: "",
    movieType: "",
    duration: "",
    countryMovie: "",
    description: "",
    quvality: "",
    rating: "",
    director:"",
    cast:""
  });
  const [img, setImg] = useState();
  const [video, setVideo] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setMovidetails({ ...movieDetails, [name]: value });
  };
  const hanldeSubmit = async (e) => {
    e.preventDefault();
    console.log("img", img);
    console.log("video", video);
    console.log(movieDetails);

    try {
      if (!img && !video) {
        alert("please select movieImage and Movie video");
        return;
      }
      const formData = new FormData();
      formData.append("movieName", movieDetails.movieName);
      formData.append("releaseYear", movieDetails.releaseYear);
      formData.append("ageLimit", movieDetails.ageLimit);
      formData.append("movieType", movieDetails.movieType);
      formData.append("duration", movieDetails.duration);
      formData.append("countryMovie", movieDetails.countryMovie);
      formData.append("description", movieDetails.description);
      formData.append("quvality", movieDetails.quvality);
      formData.append("rating", movieDetails.rating);
      formData.append("director",movieDetails.director)
      formData.append("cast",movieDetails.cast)
      formData.append("upload_file", img);
      formData.append("upload_file", video);

      const res = await axios.post(
        "http://localhost:5000/movieinsert",
        formData
      );
      alert("image and video upload successfully");
      console.log(res.data)

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div style={{ backgroundColor: "black", padding: "5%" }}>
        <h1>Movie Details</h1>
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">MovieName</label>
            <input
              type="text"
              class="form-control"
              name="movieName"
              id="exampleFormControlInput1"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">ReleaseYear</label>
            <input
              type="text"
              class="form-control"
              name="releaseYear"
              id="exampleFormControlInput1"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">ageLimit</label>
            <input
              type="text"
              class="form-control"
              name="ageLimit"
              id="exampleFormControlInput1"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Director</label>
            <input
              type="text"
              class="form-control"
              name="director"
              id="exampleFormControlInput1"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Cast</label>
            <input
              type="text"
              class="form-control"
              name="cast"
              id="exampleFormControlInput1"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">MovieType</label>
            <input
              type="text"
              class="form-control"
              name="movieType"
              id="exampleFormControlInput1"
              onChange={handleChange}
            />
          </div>
          <label>MovieImage:</label>
          <input
            type="file"
            name="image"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <br />
          <label>MovieVideo:</label>
          <input
            type="file"
            name="video"
            onChange={(e) => setVideo(e.target.files[0])}
          />
          <br />
          <div class="form-group">
            <label for="exampleFormControlInput1">duration</label>
            <input
              type="text"
              class="form-control"
              name="duration"
              id="exampleFormControlInput1"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">countryMovie</label>
            <input
              type="text"
              class="form-control"
              name="countryMovie"
              id="exampleFormControlInput1"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <input
              type="text"
              class="form-control"
              name="description"
              id="exampleFormControlInput1"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">quality</label>
            <input
              type="text"
              class="form-control"
              name="quvality"
              id="exampleFormControlInput1"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Rating</label>
            <input
              type="text"
              class="form-control"
              name="rating"
              id="exampleFormControlInput1"
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            class="btn btn-danger rounded"
            onClick={hanldeSubmit}
          >
            Primary
          </button>
        </form>
      </div>
    </>
  );
}
export default MovieDetails;
