import latestAdictionimag01 from "../../images/latest-aditions/01.jpg";
import latestAdictionimag02 from "../../images/latest-aditions/02.jpg";
import latestAdictionimag03 from "../../images/latest-aditions/03.jpg";

import latesMovies1 from "../../images/latest-movies/01.jpg";

import showMovies1 from '../../images/latest-shows/01.jpg'
function MainTabs() {
  const letestAddictionMovies = [
    {
      img: latestAdictionimag01,
      name: "IRON DOOR",
      releaseYear: "2021",
      agelimit: "18+",
      movieType: "Action",
    },
    {
      img: latestAdictionimag02,
      name: "IRON DOOR1",
      releaseYear: "2021",
      agelimit: "18+",
      movieType: "Action",
    },
    {
      img: latestAdictionimag03,
      name: "IRON DOOR2",
      releaseYear: "2021",
      agelimit: "18+",
      movieType: "Action",
    },
    {
      img: latestAdictionimag03,
      name: "IRON DOOR2",
      releaseYear: "2021",
      agelimit: "18+",
      movieType: "Action",
    },
    {
      img: latestAdictionimag03,
      name: "IRON DOOR2",
      releaseYear: "2021",
      agelimit: "18+",
      movieType: "Action",
    },
    {
      img: latestAdictionimag03,
      name: "IRON DOOR2",
      releaseYear: "2021",
      agelimit: "18+",
      movieType: "Action",
    },
  ];

  const movies = [
    {
      img: latesMovies1,
      name: "A DAM WIND",
      releaseYear: "2021",
      agelimit: "18+",
      movieType: "Action",
    },
    {
      img: latesMovies1,
      name: "A DAM WIND",
      releaseYear: "2021",
      agelimit: "18+",
      movieType: "Action",
    },
    {
      img: latesMovies1,
      name: "A DAM WIND",
      releaseYear: "2021",
      agelimit: "18+",
      movieType: "Action",
    },
    {
      img: latesMovies1,
      name: "A DAM WIND",
      releaseYear: "2021",
      agelimit: "18+",
      movieType: "Action",
    },
    {
      img: latesMovies1,
      name: "A DAM WIND",
      releaseYear: "2021",
      agelimit: "18+",
      movieType: "Action",
    },
    {
      img: latesMovies1,
      name: "A DAM WIND",
      releaseYear: "2021",
      agelimit: "18+",
      movieType: "Action",
    },
  ];

  const shows=[
    {
        img:showMovies1,
        name:"THE BORDER",
        releaseYear:"2021",
        seasoncount:"4 Season"
    },
    {
        img:showMovies1,
        name:"THE BORDER",
        releaseYear:"2021",
        seasoncount:"4 Season"
    },
    {
        img:showMovies1,
        name:"THE BORDER",
        releaseYear:"2021",
        seasoncount:"4 Season"
    },
    {
        img:showMovies1,
        name:"THE BORDER",
        releaseYear:"2021",
        seasoncount:"4 Season"
    },
    {
        img:showMovies1,
        name:"THE BORDER",
        releaseYear:"2021",
        seasoncount:"4 Season"
    },
    {
        img:showMovies1,
        name:"THE BORDER",
        releaseYear:"2021",
        seasoncount:"4 Season"
    }

  ]
  return (
    <>
      <section class="main-tabs">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="season-tabs">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link active"
                      data-toggle="pill"
                      href="#pills-additions"
                      role="tab"
                      aria-selected="true"
                    >
                      Featured
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link"
                      data-toggle="pill"
                      href="#pills-movies"
                      role="tab"
                      aria-selected="false"
                    >
                      Movies
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link"
                      data-toggle="pill"
                      href="#pills-shows"
                      role="tab"
                      aria-selected="false"
                    >
                      Shows
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- Season Tabs End --> */}
              <div class="tab-content" id="pills-tabContent">
                <div
                  id="pills-additions"
                  class="tab-pane animated fadeInRight show active"
                >
                  <div class="row">
                    {letestAddictionMovies.map((sin, index) => (
                      <div
                        class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2"
                        key={index}
                      >
                        <div class="video-block">
                          <div class="video-thumb position-relative thumb-overlay">
                            <a href="#">
                              <img alt="" class="img-fluid" src={sin.img} />
                            </a>
                            <div class="box-content">
                              <ul class="icon">
                                <li>
                                  <a href="watch-movie.html">
                                    <i class="fas fa-play"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
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
                              <a href="movie-single.html">{sin.name}</a>
                            </h2>
                            <div class="video-info d-flex align-items-center">
                              <span class="video-year">{sin.releaseYear}</span>{" "}
                              <span class="video-age">{sin.agelimit}</span>{" "}
                              <span class="video-type">{sin.movieType}</span>
                            </div>
                          </div>
                          {/* <!-- video Content End --> */}
                        </div>
                        {/* <!-- video Block End --> */}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured selection end */}
                {/* <!-- Tap Pane 1 End --> */}

                <div id="pills-movies" class="tab-pane animated fadeInRight">
                  <div class="row">
                    {movies.map((sin, index) => (
                      <div
                        class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2"
                        key={index}
                      >
                        <div class="video-block">
                          <div class="video-thumb position-relative thumb-overlay">
                            <a href="#">
                              <img alt="" class="img-fluid" src={sin.img} />
                            </a>
                            <div class="box-content">
                              <ul class="icon">
                                <li>
                                  <a href="watch-movie.html">
                                    <i class="fas fa-play"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
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
                              <a href="movie-single.html">{sin.name}</a>
                            </h2>
                            <div class="video-info d-flex align-items-center">
                              <span class="video-year">{sin.releaseYear}</span>{" "}
                              <span class="video-age">{sin.agelimit}</span>{" "}
                              <span class="video-type">{sin.movieType}</span>
                            </div>
                          </div>
                          {/* <!-- video Content End --> */}
                        </div>
                        {/* <!-- video Block End --> */}
                      </div>
                    ))}
                  </div>
                </div>
                {/* latest Movies End */}
                {/* <!-- Tap Pane 2 End --> */}

                <div id="pills-shows" class="tab-pane animated fadeInRight">
                  <div class="row">
                    {shows.map((sin)=>(
                        <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                        <div class="video-block">
                          <div class="video-thumb position-relative thumb-overlay">
                            <a href="#">
                              <img
                                alt=""
                                class="img-fluid"
                                src={sin.img}
                              />
                            </a>
                            <div class="box-content">
                              <ul class="icon">
                                <li>
                                  <a href="watch-show.html">
                                    <i class="fas fa-play"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
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
                              <a href="shows-single.html">{sin.name}</a>
                            </h2>
                            <div class="video-info d-flex align-items-center">
                              <span class="video-year">{sin.releaseYear}</span>{" "}
                              <span class="video-seasons">{sin.seasoncount}</span>
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
                {/* <!-- Tap Pane 3 End --> */}
              </div>
              {/* <!-- Tab Content End --> */}
            </div>
            {/* <!-- Col End --> */}
          </div>
          {/* <!-- Row End --> */}
        </div>
        {/* <!-- Container End --> */}
      </section>
      {/* <!-- Main Tabs Section End --> */}
    </>
  );
}

export default MainTabs;
