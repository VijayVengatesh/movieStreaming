import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function TrendingNow({ trend }) {
  const Navigate = useNavigate();
  const watch = async (i,mType) => {
    if (!sessionStorage.getItem("user")) {
      Navigate("/signup");
    } else {
      const res = await axios.put(`http://localhost:5000/viewsincrement/${i}`);
      console.log(res.data);
      Navigate(`/watchmovie/${i}/${mType}`);
    }
  };
  return (
    <>
      {/* <!-- Start Trending Section --> */}
      <section class="trending">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="block-title">Trending Now</h2>
              <div class="row">
                {Array.isArray(trend) &&
                  trend.map((sin, index) => (
                    <div
                      class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2"
                      key={index}
                    >
                      <div class="video-block">
                        <div class="video-thumb position-relative thumb-overlay">
                          <a>
                            <img
                              alt=""
                              class="img-fluid"
                              src={`http://localhost:5000/images/${sin.image}`}
                            />
                          </a>
                          <div class="box-content">
                            <ul class="icon">
                              <li>
                                <a>
                                  <a
                                    onClick={() => {
                                      watch(sin._id,sin.movieType);
                                    }}
                                  >
                                    <i class="fas fa-play"></i>
                                  </a>
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
                            <a>{sin.movieName}</a>
                          </h2>
                          <div class="video-info d-flex align-items-center">
                            <span class="video-year">{sin.releaseYear}</span>{" "}
                            <span class="video-age">{sin.ageLimit}</span>{" "}
                            <span class="video-type">{sin.movieType}</span>
                          </div>
                        </div>
                        {/* <!-- video Content End --> */}
                      </div>
                      {/* <!-- video Block End --> */}
                    </div>
                  ))}
              </div>
              {/* <!-- Row End --> */}
            </div>
          </div>
          {/* <!-- Row End --> */}
        </div>
        {/* <!-- Container End --> */}
      </section>
      {/* <!-- Trending Section End --> */}
    </>
  );
}
export default TrendingNow;
