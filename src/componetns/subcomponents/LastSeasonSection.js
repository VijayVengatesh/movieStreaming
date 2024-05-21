import parrelex from "../../images/parallax/best-series.jpg";
import drama1 from "../../images/best-drama/01.jpg";
import action1 from "../../images/best-action/01.jpg";
import romance1 from "../../images/best-romance/01.jpg";
import Index from "../Index";
import { Link } from "react-router-dom";
import axios from "axios";
function LastSeasonSection({ action, drama, romance }) {
  return (
    <>
      {/* <!-- Start Last Seasons Section --> */}
      <section class="last-seasons pb-0">
        <div
          class="last-season"
          style={{
            backgroundImage: `linear-gradient(to top, #202020, rgb(2 2 2 / 90%)), url(${parrelex})`,
          }}
        >
          <div class="container-fluid">
            <div class="season-header text-center">
              <h5 class="mb-4">featured</h5>
              <h2 class="mb-4">Best Movies</h2>
              <p class="mb-4">News Movie 5 Just flown in Watch and debate.</p>
            </div>
            {/* <!-- Season Header End --> */}
            <div class="season-tabs">
              <ul
                class="nav nav-pills mb-3 justify-content-center mb-5"
                id="pills-tab-seasons"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    data-toggle="pill"
                    href="#pills-drama"
                    role="tab"
                    aria-selected="true"
                  >
                    Drama
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    data-toggle="pill"
                    href="#pills-action"
                    role="tab"
                    aria-selected="false"
                  >
                    Action
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    data-toggle="pill"
                    href="#pills-romance"
                    role="tab"
                    aria-selected="false"
                  >
                    Romance
                  </a>
                </li>
              </ul>
              <div class="tab-content" id="pills-tab-Content">
                <div
                  id="pills-drama"
                  class="tab-pane animated fadeInRight show active"
                >
                  <div class="row">
                    {Array.isArray(drama) &&
                      drama.map((sin, Index) => (
                        <div
                          class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2"
                          key={Index}
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
                                  <Link to={`http://localhost:3000/watchmovie?id=${encodeURIComponent(sin._id) }&movietype=${encodeURI(sin.movieType)}`}>
                                <a
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                                </Link>
                                  </li>
                                  <li>
                                    <a>
                                      <i class="fas fa-plus"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shows-single.html">
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
                                <a href="shows-single.html">{sin.movieName}</a>
                              </h2>
                              <div class="video-info d-flex align-items-center">
                                <span class="video-year">
                                  {new Date(sin.releaseYear).getFullYear()}
                                </span>{" "}
                                <span class="video-seasons">
                                  {sin.ageLimit}
                                </span>
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
                {/* <!-- Tab Pane 1 End --> */}
                <div id="pills-action" class="tab-pane animated fadeInRight">
                  <div class="row">
                    {Array.isArray(action) &&
                      action.map((sin, index) => (
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
                                  <Link to={`http://localhost:3000/watchmovie?id=${encodeURIComponent(sin._id) }&movietype=${encodeURI(sin.movieType)}`}>
                                <a
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                                </Link>
                                  </li>
                                  <li>
                                    <a>
                                      <i class="fas fa-plus"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shows-single.html">
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
                                <a href="shows-single.html">{sin.movieName}</a>
                              </h2>
                              <div class="video-info d-flex align-items-center">
                                <span class="video-year">
                                  {new Date(sin.releaseYear).getFullYear()}
                                </span>{" "}
                                <span class="video-seasons">
                                  {sin.ageLimit}
                                </span>
                              </div>
                            </div>
                            {/* <!-- video Content End --> */}
                          </div>
                        </div>
                      ))}
                  </div>
                  {/* <!-- Row End --> */}
                </div>
                {/* <!-- Tab Pane 2 End --> */}
                <div id="pills-romance" class="tab-pane animated fadeInRight">
                  <div class="row">
                    {Array.isArray(romance) &&
                      romance.map((sin, index) => (
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
                                  <Link to={`http://localhost:3000/watchmovie?id=${encodeURIComponent(sin._id) }&movietype=${encodeURI(sin.movieType)}`}>
                                <a
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                                </Link>
                                  </li>
                                  <li>
                                    <a>
                                      <i class="fas fa-plus"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shows-single.html">
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
                                <a href="shows-single.html">{sin.movieName}</a>
                              </h2>
                              <div class="video-info d-flex align-items-center">
                                <span class="video-year">
                                  {new Date(sin.releaseYear).getFullYear()}
                                </span>{" "}
                                <span class="video-seasons">
                                  {sin.ageLimit}
                                </span>
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
                {/* <!-- Tab Pane 3 End --> */}
              </div>
              {/* <!-- Tab Content End --> */}
            </div>
            {/* <!-- Season tabs End --> */}
          </div>
          {/* <!-- Container End --> */}
        </div>
        {/* <!-- Last Season End --> */}
      </section>
      {/* <!-- Last Seasons Section End --> */}
    </>
  );
}
export default LastSeasonSection;
