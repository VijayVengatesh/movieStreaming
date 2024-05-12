import { useParams } from "react-router-dom";
import playpage1 from "../images/play-page/01.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./subcomponents/Header";
import Footer from "./subcomponents/Footer";
function WatchMovie() {
  const [singleMovie, setSingleMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[likebutton,setLikeButton]=useState(true)
  
  const parme = useParams();
  console.log(parme);
  console.log(parme.id);
  useEffect(() => {
    if (parme.id) {
      const res = axios
        .get(`http://localhost:5000/findsinglemovie/${parme.id}`)
        .then((result) => {
          console.log(result);
          setSingleMovie(result.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log("there was the fetch problem", err);
          setError(err.message);
        });
    }
  }, [parme.id]);

  const likeIncrease=async()=>{
    await axios.put(`http://localhost:5000/likeincrement/${parme.id}`)
    .then(result=>{
      console.log("like increse",result)
      setLikeButton(false)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  const likedecrease=async(req,res)=>{
    axios.put(`http://localhost:5000/likedecrement/${parme.id}`)
    .then(result=>{
      console.log(result)
      setLikeButton(true)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  if (loading) {
    return (
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
      </div>
    );
  }
  if (error) {
    return <div>Error:{error}</div>;
  }
   if(!singleMovie)
    {
      return(
        <div>no moivie details available</div>
      )
    }

  return(
    <>
    <Header/>
    <div class="video-container">
        <video class="video d-block" controls loop autoPlay>
          <source src={`http://localhost:5000/videos/${singleMovie.video}`} type="video/mp4" />
        </video>
      </div>


      <div class="main-content">
        {/* <!-- Start Play Details Section --> */}
        <section class="play-details">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <div class="row">
                  <div class="col-md-12">
                    <div class="play-thumb mb-4">
                      <img class="img-fluid" src={`http://localhost:5000/images/${singleMovie.image}`} alt="" />
                      <div class="top-badge">
                        <div class="video-badge">
                          <img
                            class="img-fluid"
                            src="images/top-movies.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    {/* <!-- Play Thumb End --> */}
                    <div class="thumb-details text-center">
                      <span> {singleMovie.quvality}</span>
                      <span>{singleMovie.views}</span>
                      <span>{singleMovie.rating}</span>
                    </div>
                    {/* <!-- Thumb Details End --> */}
                  </div>
                  {/* <!-- Col End --> */}
                </div>
                {/* <!-- Row End --> */}
              </div>
              {/* <!-- Col End --> */}
              <div class="col-md-9">
                <div class="play-details-content">
                  <div class="title-block d-flex align-items-center justify-content-between">
                    <h2 class="play-title">{singleMovie.movieName}</h2>
                  </div>
                  {/* <!-- Title Block --> */}
                  <div class="details-info mb-4">
                    <span>
                      <i class="icofont-user mr-2" aria-hidden="true"></i> {singleMovie.ageLimit}
                    </span>
                    <span>
                      <i class="icofont-clock-time mr-2" aria-hidden="true"></i>{" "}
                      {singleMovie.duration}
                    </span>
                    <span>
                      <i
                        class="icofont-simple-smile mr-2"
                        aria-hidden="true"
                      ></i>{" "}
                      {singleMovie.releaseYear}
                    </span>
                    <span>
                      <i class="icofont-movie mr-2" aria-hidden="true"></i>{" "}
                      {singleMovie.movieType}
                    </span>
                    <span>
                      <i class="icofont-world mr-2" aria-hidden="true"></i>{" "}
                      {singleMovie.countryMovie}
                    </span>
                  </div>
                  {/* <!-- Details Info --> */}
                  <div class="details-desc">
                    <p>
                     {singleMovie.description}
                    </p>
                  </div>
                  {/* <!-- Details Desc --> */}
                  <div class="movie-persons mb-4">
                    <div class="person-block">
                      <h5 class="title">Director</h5>
                      <p class="name">{singleMovie.director}</p>
                    </div>
                    {/* <!-- Person Block --> */}
                    <div class="person-block">
                      <h5 class="title">Cast</h5>
                      <p>
                       {singleMovie.cast}
                      </p>
                    </div>
                    {/* <!-- Person Block --> */}
                  </div>
                  {/* <!-- Movie Persons --> */}
                  <div class="details-buttons">
                    <div class="row d-flex align-items-center">
                      <div class="col-6 col-xl mb-xl-0 mb-3">
                        <a onClick={likebutton?likeIncrease:likedecrease}
                          class="btn d-block hvr-sweep-to-right"
                          tabIndex="0"
                        >
                          
                          {likebutton?<i class="icofont-thumbs-up"></i>:<i class="icofont-thumbs-down"></i>}
                          {likebutton?"like":"dislike"}
                        </a>
                      </div>
                      {/* <!-- Col End --> */}
                      <div class="col-6 col-xl mb-xl-0 mb-3">
                        <a
                          href="watch-movie.html"
                          class="btn d-block hvr-sweep-to-right"
                          tabIndex="0"
                        >
                          <i class="icofont-plus mr-2" aria-hidden="true"></i>MY
                          List
                        </a>
                      </div>
                      {/* <!-- Col End --> */}
                      <div class="col-6 col-xl mb-xl-0 mb-3">
                        <a
                          id="trailer"
                          class="btn d-block hvr-sweep-to-right"
                          tabIndex="0"
                          data-toggle="modal"
                          data-target="#trailer-modal"
                          aria-hidden="true"
                        >
                          <i
                            class="icofont-ui-movie mr-2"
                            aria-hidden="true"
                          ></i>
                          Trailer
                        </a>
                        {/* <!-- Modal Trailer --> */}
                        <div
                          class="modal fade"
                          id="trailer-modal"
                          tabIndex="0"
                          role="dialog"
                          aria-labelledby="trailer-modal"
                          aria-hidden="true"
                        >
                          <div
                            class="modal-dialog modal-lg"
                            role="document"
                            id="trailerModal"
                          >
                            {/* <!-- Modal Content --> */}
                            <div class="modal-content">
                              {/* <!-- modal header --> */}
                              <div class="modal-header">
                                <h5 class="modal-title">Trailer</h5>
                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">
                                    <i class="fas fa-times"></i>
                                  </span>
                                </button>
                              </div>
                              {/* <!-- Modal Body --> */}
                              <div class="modal-body">
                                <video
                                  class="video d-block"
                                  controls=""
                                  loop=""
                                >
                                  <source
                                    src="video/01-video.mp4"
                                    type="video/mp4"
                                  />
                                </video>
                              </div>
                              {/* <!-- Modal Body --> */}
                            </div>
                            {/* <!-- Modal Content --> */}
                          </div>
                          {/* <!-- Modal Dialog --> */}
                        </div>
                        {/* <!-- Modal Trailer --> */}
                      </div>
                      {/* <!-- Col End --> */}
                      <div class="col-6 col-xl mb-xl-0">
                        <a
                          id="share"
                          class="btn hvr-sweep-to-right d-block"
                          tabIndex="0"
                          data-toggle="modal"
                          data-target="#share-modal"
                        >
                          <i class="icofont-share mr-2" aria-hidden="true"></i>
                          Share
                        </a>
                        {/* <!-- Modal Share --> */}
                        <div
                          class="modal fade"
                          id="share-modal"
                          tabIndex="0"
                          role="dialog"
                          aria-labelledby="share-modal"
                          aria-hidden="true"
                        >
                          <div
                            class="modal-dialog modal-lg"
                            role="document"
                            id="sharemodal"
                          >
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title">Share</h5>
                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">
                                    <i class="fas fa-times"></i>
                                  </span>
                                </button>
                              </div>
                              {/* <!-- modal header End --> */}
                              <div class="modal-body">
                                <div class="icon-container d-flex">
                                  <div class="icon-block">
                                    <i class="social-icon fab fa-twitter fa-2x"></i>
                                    <p>Twitter</p>
                                  </div>
                                  <div class="icon-block">
                                    <i class="social-icon fab fa-facebook fa-2x"></i>
                                    <p>Facebook</p>
                                  </div>
                                  <div class="icon-block">
                                    <i class="social-icon fab fa-instagram fa-2x"></i>
                                    <p>Instagram</p>
                                  </div>
                                  <div class="icon-block">
                                    <i class="social-icon fab fa-telegram fa-2x"></i>
                                    <p>Telegram</p>
                                  </div>
                                </div>
                              </div>
                              {/* <!-- Modal Body End --> */}
                            </div>
                            {/* <!-- Modal Content End --> */}
                          </div>
                          {/* <!-- Modal Dialog End --> */}
                        </div>
                        {/* <!-- Modal Share End --> */}
                      </div>
                      {/* <!-- Col End --> */}
                    </div>
                    {/* <!-- Row End --> */}
                  </div>
                  {/* <!-- Details Buttons End --> */}
                </div>
                {/* <!-- Details Content End --> */}
              </div>
              {/* <!-- Col End --> */}
            </div>
            {/* <!-- row End --> */}
          </div>
          {/* <!-- Container End --> */}
        </section>
        {/* <!-- Play Details Section End --> */}
        {/* <!-- Start Related Movies Section --> */}
        <section class="related-movies">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <h2 class="block-title">Related Movies</h2>
              </div>
              {/* <!-- Col End --> */}
            </div>
            {/* <!-- Row End --> */}
            <div class="row">
              <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <div class="video-block">
                  <div class="video-thumb position-relative thumb-overlay">
                    <a>
                      <img
                        class="img-fluid"
                        src="images/best-action/01.jpg"
                        alt=""
                      />
                    </a>
                    <div class="box-content">
                      <ul class="icon">
                        <li>
                          <a href="watch-movie.html">
                            <i class="fas fa-play"></i>
                          </a>
                        </li>
                        <li>
                          <a>
                            <i class="fas fa-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="movie-single.html">
                            <i class="fas fa-info"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Box Content End --> */}
                  </div>
                  {/* <!-- Video Thumb End --> */}
                  <div class="video-content">
                    <h2 class="video-title">
                      <a href="movie-single.html">life is Beautiful</a>
                    </h2>
                    <div class="video-info d-flex align-items-center">
                      <span class="video-year">2021</span>
                      <span class="video-age">+18</span>
                      <span class="video-type">Action</span>
                    </div>
                  </div>
                  {/* <!-- video Content End --> */}
                </div>
                {/* <!-- video Block End --> */}
              </div>
              {/* <!-- Col End --> */}
              <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <div class="video-block">
                  <div class="video-thumb position-relative thumb-overlay">
                    <a>
                      <img
                        class="img-fluid"
                        src="images/best-action/02.jpg"
                        alt=""
                      />
                    </a>
                    <div class="box-content">
                      <ul class="icon">
                        <li>
                          <a href="watch-movie.html">
                            <i class="fas fa-play"></i>
                          </a>
                        </li>
                        <li>
                          <a>
                            <i class="fas fa-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="movie-single.html">
                            <i class="fas fa-info"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Box Content End -/-> */}
                  </div>
                  {/* <!-- Video Thumb End --> */}
                  <div class="video-content">
                    <h2 class="video-title">
                      <a href="movie-single.html">The End</a>
                    </h2>
                    <div class="video-info d-flex align-items-center">
                      <span class="video-year">2021</span>
                      <span class="video-age">+18</span>
                      <span class="video-type">Action</span>
                    </div>
                  </div>
                  {/* <!-- video Content End --> */}
                </div>
                {/* <!-- video Block End --> */}
              </div>
              {/* <!-- Col End --> */}
              <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <div class="video-block">
                  <div class="video-thumb position-relative thumb-overlay">
                    <a>
                      <img
                        class="img-fluid"
                        src="images/best-action/03.jpg"
                        alt=""
                      />
                    </a>
                    <div class="box-content">
                      <ul class="icon">
                        <li>
                          <a href="watch-movie.html">
                            <i class="fas fa-play"></i>
                          </a>
                        </li>
                        <li>
                          <a>
                            <i class="fas fa-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="movie-single.html">
                            <i class="fas fa-info"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Box Content End --> */}
                  </div>
                  {/* <!-- Video Thumb End --> */}
                  <div class="video-content">
                    <h2 class="video-title">
                      <a href="movie-single.html">the beginning</a>
                    </h2>
                    <div class="video-info d-flex align-items-center">
                      <span class="video-year">2021</span>
                      <span class="video-age">+18</span>
                      <span class="video-type">Action</span>
                    </div>
                  </div>
                  {/* <!-- video Content End --> */}
                </div>
                {/* <!-- video Block End --> */}
              </div>
              {/* <!-- Col End --> */}
              <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <div class="video-block">
                  <div class="video-thumb position-relative thumb-overlay">
                    <a>
                      <img
                        class="img-fluid"
                        src="images/best-action/04.jpg"
                        alt=""
                      />
                    </a>
                    <div class="box-content">
                      <ul class="icon">
                        <li>
                          <a href="watch-movie.html">
                            <i class="fas fa-play"></i>
                          </a>
                        </li>
                        <li>
                          <a>
                            <i class="fas fa-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="movie-single.html">
                            <i class="fas fa-info"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Box Content End --> */}
                  </div>
                  {/* <!-- Video Thumb End --> */}
                  <div class="video-content">
                    <h2 class="video-title">
                      <a href="movie-single.html">The Search</a>
                    </h2>
                    <div class="video-info d-flex align-items-center">
                      <span class="video-year">2021</span>
                      <span class="video-age">+18</span>
                      <span class="video-type">Action</span>
                    </div>
                  </div>
                  {/* <!-- video Content End --> */}
                </div>
                {/* <!-- video Block End --> */}
              </div>
              {/* <!-- Col End --> */}
              <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <div class="video-block">
                  <div class="video-thumb position-relative thumb-overlay">
                    <a>
                      <img
                        class="img-fluid"
                        src="images/best-action/05.jpg"
                        alt=""
                      />
                    </a>
                    <div class="box-content">
                      <ul class="icon">
                        <li>
                          <a href="watch-movie.html">
                            <i class="fas fa-play"></i>
                          </a>
                        </li>
                        <li>
                          <a>
                            <i class="fas fa-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="movie-single.html">
                            <i class="fas fa-info"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Box Content End --> */}
                  </div>
                  {/* <!-- Video Thumb End --> */}
                  <div class="video-content">
                    <h2 class="video-title">
                      <a href="movie-single.html">The Treasures</a>
                    </h2>
                    <div class="video-info d-flex align-items-center">
                      <span class="video-year">2021</span>
                      <span class="video-age">+18</span>
                      <span class="video-type">Action</span>
                    </div>
                  </div>
                  {/* <!-- video Content End --> */}
                </div>
                {/* <!-- video Block End --> */}
              </div>
              {/* <!-- Col End --> */}
              <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <div class="video-block">
                  <div class="video-thumb position-relative thumb-overlay">
                    <a>
                      <img
                        class="img-fluid"
                        src="images/best-action/06.jpg"
                        alt=""
                      />
                    </a>
                    <div class="box-content">
                      <ul class="icon">
                        <li>
                          <a href="watch-movie.html">
                            <i class="fas fa-play"></i>
                          </a>
                        </li>
                        <li>
                          <a>
                            <i class="fas fa-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="movie-single.html">
                            <i class="fas fa-info"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Box Content End --> */}
                  </div>
                  {/* <!-- Video Thumb End --> */}
                  <div class="video-content">
                    <h2 class="video-title">
                      <a href="movie-single.html">Problems</a>
                    </h2>
                    <div class="video-info d-flex align-items-center">
                      <span class="video-year">2021</span>
                      <span class="video-age">+18</span>
                      <span class="video-type">Action</span>
                    </div>
                  </div>
                  {/* <!-- video Content End --> */}
                </div>
                {/* <!-- video Block End --> */}
              </div>
              {/* <!-- Col End --> */}
            </div>
            {/* <!-- Row End --> */}
          </div>
          {/* <!-- Container End --> */}
        </section>
        {/* <!-- Related Movies Section End --> */}
        <Footer/>
      </div>
    </>
  )
}
export default WatchMovie;
