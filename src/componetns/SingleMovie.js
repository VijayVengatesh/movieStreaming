import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./subcomponents/Header";
import Footer from "./subcomponents/Footer";
import RelatedMovies from "./subcomponents/RelatedMovies";
function SingleMovie() {
const Navigate=useNavigate()
  const [singleMovie, setSingleMovie] = useState(null);
  const [relatedMovie, setRelatedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[likebutton,setLikeButton]=useState(true)

  const param = useParams();
  useEffect(() => {
    async function getData() {
      try {
        const sMovie = await axios.get(
          `http://localhost:5000/findsinglemovie/${param.id}`
        );
        setSingleMovie(sMovie.data);

        const rMovie = await axios.get(
          `http://localhost:5000/relatedmovies/${param.movieType}`
        );
        setRelatedMovie(rMovie.data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    getData();
  }, [param.id, param.movieType]);

  const likeIncrease=async()=>{
    await axios
    .put(`http://localhost:5000/likeincrement/${param.id}`)
    .then((result) => {
      console.log("like increse", result);
      setLikeButton(false);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  const likedecrease=async()=>{
    axios
    .put(`http://localhost:5000/likedecrement/${param.id}`)
    .then((result) => {
      console.log("likedecress",result);
      setLikeButton(true);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const watch = async (i,mType) => {
    if (!sessionStorage.getItem("user")) {
      Navigate("/signup");
    } else {
      const res = await axios.put(`http://localhost:5000/viewsincrement/${i}`);
      console.log(res.data);
      Navigate(`/watchmovie/${i}/${mType}`);
    }
  };
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
    return <h1>{error}</h1>;
  }
  

  return(

    <>
    <Header/>
    <div class="main" id="main">

        {/* <!-- Start Banner Section --> */}
        <div class="banner-single banner-wrap banner-bg movie-bg" style={{backgroundImage:`url(http://localhost:5000/images/1715321957618.jpg)`}}>
            <div class="container-fluid">
                <div class="banner-content">
                    <div class="transparent-block">
                        <div class="banner-caption">
                            <div class="position-relative mb-4">
                                <a class="d-flex align-items-center">
                                    <div class="play-icon">
                                        <div class="circle pulse"></div>
                                        <div class="circle" onClick={()=>{watch(singleMovie._id,singleMovie.movieType)}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                <polygon points="40,30 65,50 40,70"></polygon>
                                            </svg>
                                        </div>
                                    </div>
                                    <h2 class="banner-name text-white font-weight-700">{singleMovie.movieName}</h2>
                                </a>
                            </div>
                        </div>
                        {/* <!-- Banner Caption End --> */}
                    </div>
                    {/* <!-- Transparent Block End --> */}
                </div>
                {/* <!-- Banner Content End --> */}
            </div>
            {/* <!-- Container End --> */}
        </div>
        {/* <!-- Banner Section End --> */}
        {/* <!-- Start Main Content --> */}
        <div class="main-content">
            {/* <!-- Start Play Details Section --> */}
            <section class="play-details">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="play-thumb mb-4">
                                        <img class="img-fluid" src={`http://localhost:5000/images/${singleMovie.image}`} alt=""/>
                                        <div class="top-badge">
                                            <div class="video-badge">
                                                <img class="img-fluid" src="images/top-movies.png" alt=""/>
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
                                    <span><i class="icofont-user mr-2" aria-hidden="true"></i> {singleMovie.ageLimit}</span>
                                    <span><i class="icofont-clock-time mr-2" aria-hidden="true"></i> {singleMovie.duration}</span>
                                    <span><i class="icofont-simple-smile mr-2" aria-hidden="true"></i> {singleMovie.releaseYear}</span>
                                    <span><i class="icofont-movie mr-2" aria-hidden="true"></i> {singleMovie.movieType}</span>
                                    <span><i class="icofont-world mr-2" aria-hidden="true"></i>  {singleMovie.countryMovie}</span>
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
                                            <a onClick={likebutton?likeIncrease:likedecrease} class="btn d-block hvr-sweep-to-right" tabindex="0">{likebutton?<i class="icofont-thumbs-up"></i>:<i class="icofont-thumbs-down"></i>}{likebutton?"like":"dislike"}</a>
                                        </div>
                                        {/* <!-- Col End --> */}
                                        <div class="col-6 col-xl mb-xl-0 mb-3">
                                            <a href="watch-movie.html" class="btn d-block hvr-sweep-to-right" tabindex="0"><i class="icofont-plus mr-2" aria-hidden="true"></i>MY List</a>
                                        </div>
                                        {/* <!/- Col End --> */}
                                        <div class="col-6 col-xl mb-xl-0 mb-3">
                                            <a id="trailer" class="btn d-block hvr-sweep-to-right" tabindex="0" data-toggle="modal" data-target="#trailer-modal" aria-hidden="true"><i class="icofont-ui-movie mr-2" aria-hidden="true"></i>Trailer</a>
                                            {/* <!-- Modal Trailer --> */}
                                            <div class="modal fade" id="trailer-modal" tabindex="0" role="dialog" aria-labelledby="trailer-modal" aria-hidden="true">
                                                <div class="modal-dialog modal-lg" role="document" id="trailerModal">
                                                    {/* <!-- Modal Content --> */}
                                                    <div class="modal-content">
                                                        {/* <!-- modal header --> */}
                                                        <div class="modal-header">
                                                            <h5 class="modal-title">Trailer</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                                                            </button>
                                                        </div>
                                                        {/* <!-- Modal Body --> */}
                                                        <div class="modal-body">
                                                            <video class="video d-block" controls="" loop="">
                                                                <source src="video/01-video.mp4" type="video/mp4"/>
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
                                            <a id="share" class="btn hvr-sweep-to-right d-block" tabindex="0" data-toggle="modal" data-target="#share-modal">
                                                <i class="icofont-share mr-2" aria-hidden="true"></i>Share</a>
                                            {/* <!-- Modal Share --> */}
                                            <div class="modal fade" id="share-modal" tabindex="0" role="dialog" aria-labelledby="share-modal" aria-hidden="true">
                                                <div class="modal-dialog modal-lg" role="document" id="sharemodal">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title">Share</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                                                            </button>
                                                        </div>
                                                        {/* <!-- modal header End --> */}
                                                        <div class="modal-body">
                                                            <div class="icon-container d-flex">
                                                                <div class="icon-block"><i class="social-icon fab fa-twitter fa-2x"></i>
                                                                    <p>Twitter</p>
                                                                </div>
                                                                <div class="icon-block"><i class="social-icon fab fa-facebook fa-2x"></i>
                                                                    <p>Facebook</p>
                                                                </div>
                                                                <div class="icon-block"><i class="social-icon fab fa-instagram fa-2x"></i>
                                                                    <p>Instagram</p>
                                                                </div>
                                                                <div class="icon-block"><i class="social-icon fab fa-telegram fa-2x"></i>
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
        </div>

        <RelatedMovies relatedMovie={relatedMovie}/>
    </div>
    <Footer/>
    </>
  )
}

export default SingleMovie;
