import { useNavigate } from "react-router-dom";
import axios from "axios";

function RelatedMovies({ relatedMovie }) {
const Navigate=useNavigate()
  console.log(relatedMovie);
  const singleMovie = async (i,mType) => {
    if (!sessionStorage.getItem("user")) {
      Navigate("/signup");
    } else {
      Navigate(`/singlemovie/${i}/${mType}`)
    }
  };
  if (!relatedMovie) {
    return <h1>no data for realted movies</h1>;
  }
  return (
    <>
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
            {Array.isArray(relatedMovie) &&
              relatedMovie.map((sin, index) => (
                <div
                  class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2"
                  key={index}
                >
                  <div class="video-block">
                    <div class="video-thumb position-relative thumb-overlay">
                      <a>
                        <img
                          class="img-fluid"
                          src={`http://localhost:5000/images/${sin.image}`}
                          alt=""
                        />
                      </a>
                      <div class="box-content">
                        <ul class="icon">
                          <li>
                            <a onClick={()=>{singleMovie(sin._id,sin.movieType)}}>
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
                        <a href="movie-single.html">{sin.movieName}</a>
                      </h2>
                      <div class="video-info d-flex align-items-center">
                        <span class="video-year">{sin.releaseYear}</span>
                        <span class="video-age">{sin.ageLimit}</span>
                        <span class="video-type">{sin.movieType}</span>
                      </div>
                    </div>
                    {/* <!-- video Content End --> */}
                  </div>
                  {/* <!-- video Block End --> */}
                </div>
              ))}
            {/* <!-- Col End --> */}
          </div>
          {/* <!-- Row End --> */}
        </div>
        {/* <!-- Container End --> */}
      </section>
    </>
  );
}
export default RelatedMovies;
