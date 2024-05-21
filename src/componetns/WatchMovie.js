import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./subcomponents/Header";
import Footer from "./subcomponents/Footer";
import RelatedMovies from "./subcomponents/RelatedMovies";
import { id } from "date-fns/locale";

function WatchMovie() {
  const [singleMovie, setSingleMovie] = useState(null);
  const [relatedMovie, setRelatedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likebutton, setLikeButton] = useState(true);
  const[link,setLink]=useState('')
  const location=useLocation()
  console.log("location",location)
  const useParams=new URLSearchParams(location.search)
  let movieId=useParams.get("id")
  let movieType=useParams.get("movietype")
  console.log("mtype",movieType)
  // const parme = useParams();
  // console.log(parme);
  useEffect(() => {
    if (movieId && movieType ) {
      axios.put(`http://localhost:5000/viewsincrement/${movieId}`)
      .then(response=>{
        console.log("views increment",response.data)
      })
      .catch(err=>{
        console.log(err)
      })
      axios
        .get(`http://localhost:5000/findsinglemovie/${movieId}`)
        .then((result) => {
          console.log(result);
          setSingleMovie(result.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log("there was the fetch problem", err);
          setError(err.message);
        });
      axios
        .get(`http://localhost:5000/relatedmovies/${movieType}`)
        .then((result) => {
          setRelatedMovie(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return ()=>{
      setSingleMovie(null)
    }
    

  }, [movieId, movieType]);

  console.log("releated Movie", relatedMovie);

  const likeIncrease = async () => {
    await axios
      .put(`http://localhost:5000/likeincrement/${movieId}`)
      .then((result) => {
        console.log("like increse", result);
        setLikeButton(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const likedecrease = async (req, res) => {
    axios
      .put(`http://localhost:5000/likedecrement/${movieId}`)
      .then((result) => {
        console.log(result);
        setLikeButton(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const whatsapp=()=>{
    setLink(`http://localhost:3000/watchmovie?id=663dbc979b7c7784e075dfda&movietype=Actiion`)
    const whatsappUrl=`https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`
    window.open(whatsappUrl)


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
  if (!singleMovie) {
    return <div>no moivie details available</div>;
  }

  return (
    <>
      <Header />
      <div class="video-container">
        <video class="video d-block" controls autoPlay muted >
          <source
            src={`http://localhost:5000/videos/${singleMovie.video}`}
            type="video/mp4"
          />
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
                      <img
                        class="img-fluid"
                        src={`http://localhost:5000/images/${singleMovie.image}`}
                        alt=""
                      />
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
                      <i class="icofont-user mr-2" aria-hidden="true"></i>{" "}
                      {singleMovie.ageLimit}
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
                      {new Date(singleMovie.releaseYear).getFullYear()}
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
                    <p>{singleMovie.description}</p>
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
                      <p>{singleMovie.cast}</p>
                    </div>
                    {/* <!-- Person Block --> */}
                  </div>
                  {/* <!-- Movie Persons --> */}
                  <div class="details-buttons">
                    <div class="row d-flex align-items-center">
                      <div class="col-6 col-xl mb-xl-0 mb-3">
                        <a
                          onClick={likebutton ? likeIncrease : likedecrease}
                          class="btn d-block hvr-sweep-to-right"
                          tabIndex="0"
                        >
                          {likebutton ? (
                            <i class="icofont-thumbs-up"></i>
                          ) : (
                            <i class="icofont-thumbs-down"></i>
                          )}
                          {likebutton ? "like" : "dislike"}
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
                                  <div class="icon-block" onClick={()=>{whatsapp(singleMovie.video)}}>
                                    <i class="social-icon fab fa-whatsapp fa-2x"></i>
                                    <p>Whatsapp</p>
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
        <RelatedMovies relatedMovie={relatedMovie}/>
        {/* <!-- Related Movies Section End --> */}
        <Footer />
      </div>
    </>
  );
}
export default WatchMovie;
