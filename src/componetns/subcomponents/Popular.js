import popularMovie1 from "../../images/popular/01.jpg";
function Popular() {
  const popularMovies = [
    {
      img: popularMovie1,
      name: "THE LOVE",
      releaseYear: "2021",
      agelimit: "18+",
      mvoieType: "'Action",
    },
    {
        img: popularMovie1,
        name: "THE LOVE",
        releaseYear: "2021",
        agelimit: "18+",
        mvoieType: "'Action",
      },
      {
        img: popularMovie1,
        name: "THE LOVE",
        releaseYear: "2021",
        agelimit: "18+",
        mvoieType: "'Action",
      },
      {
        img: popularMovie1,
        name: "THE LOVE",
        releaseYear: "2021",
        agelimit: "18+",
        mvoieType: "'Action",
      },
      {
        img: popularMovie1,
        name: "THE LOVE",
        releaseYear: "2021",
        agelimit: "18+",
        mvoieType: "'Action",
      },
      {
        img: popularMovie1,
        name: "THE LOVE",
        releaseYear: "2021",
        agelimit: "18+",
        mvoieType: "'Action",
      },
      {
        img: popularMovie1,
        name: "THE LOVE",
        releaseYear: "2021",
        agelimit: "18+",
        mvoieType: "'Action",
      },
      {
        img: popularMovie1,
        name: "THE LOVE",
        releaseYear: "2021",
        agelimit: "18+",
        mvoieType: "'Action",
      }
  ];
  return (
    <>
      {/* <!-- Start Pupular Section --> */}
      <section class="pupular">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="block-title">Pupular Movies</h2>
              {/* <!-- Start Pupular Slider --> */}
              <div class="owl-carousel owl-theme" id="pupular-slider">
                {popularMovies.map((sin) => (
                  <div class="item">
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
                          <span class="video-type">{sin.mvoieType}</span>
                        </div>
                      </div>
                      {/* <!-- video Content End --> */}
                    </div>
                    {/* <!-- video Block End --> */}
                  </div>
                ))}
              </div>
              {/* <!-- Pupular Slider End --> */}
            </div>
            {/* <!-- Col End --> */}
          </div>
          {/* <!-- Row End --> */}
        </div>
        {/* <!-- Container End --> */}
      </section>
      {/* <!-- Pupular Section End --> */}
    </>
  );
}

export default Popular;
