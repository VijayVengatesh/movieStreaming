import boxofficemovie1 from '../../images/movies/02.jpg'
function BoxOffice() {
  // const boxofficeMovies = [
  //   {
  //     name: "VEERAM",
  //     img: topmovie1,
  //   },
  //   {
  //     name: "VEERAM",
  //     img: topmovie1,
  //   },
  //   {
  //     name: "VEERAM",
  //     img: topmovie1,
  //   },
  //   {
  //     name: "VEERAM",
  //     img: topmovie1,
  //   },
  //   {
  //     name: "VEERAM",
  //     img: topmovie1,
  //   },
  //   {
  //     name: "VEERAM",
  //     img: topmovie1,
  //   },
  //   {
  //     name: "VEERAM",
  //     img: topmovie1,
  //   },
  //   {
  //     name: "VEERAM",
  //     img: topmovie1,
  //   },
  //   {
  //     name: "VEERAM",
  //     img: topmovie1,
  //   },
  //   {
  //     name: "VEERAM",
  //     img: topmovie1,
  //   }
  // ];
  const boxofficeMovies = [
    {
      img: boxofficemovie1,
      name: "THE LOVE",
      releaseYear: "2021",
      agelimit: "18+",
      mvoieType: "'Action",
    },
    {
        img: boxofficemovie1,
        name: "THE LOVE",
        releaseYear: "2021",
        agelimit: "18+",
        mvoieType: "'Action",
      },
      {
        img: boxofficemovie1,
        name: "THE LOVE",
        releaseYear: "2021",
        agelimit: "18+",
        mvoieType: "'Action",
      },
      {
        img: boxofficemovie1,
        name: "THE LOVE",
        releaseYear: "2021",
        agelimit: "18+",
        mvoieType: "'Action",
      },
      {
        img: boxofficemovie1,
        name: "THE LOVE",
        releaseYear: "2021",
        agelimit: "18+",
        mvoieType: "'Action",
      },
      {
        img: boxofficemovie1,
        name: "THE LOVE",
        releaseYear: "2021",
        agelimit: "18+",
        mvoieType: "'Action",
      },
      {
        img: boxofficemovie1,
        name: "THE LOVE",
        releaseYear: "2021",
        agelimit: "18+",
        mvoieType: "'Action",
      },
      {
        img: boxofficemovie1,
        name: "THE LOVE",
        releaseYear: "2021",
        agelimit: "18+",
        mvoieType: "'Action",
      }
  ];
  return (
    <>
      <section class="pupular">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="block-title">TOP 10 BOX OFFICE</h2>
              {/* <!-- Start Pupular Slider --> */}
              <div class="owl-carousel owl-theme" id="boxoffice-slider">
              {boxofficeMovies.map((sin) => (
                  <div class="item">
                    <div class="video-block">
                      <div class="video-thumb position-relative thumb-overlay">
                        <a href="#">
                          <img alt="" class="img-fluid" src={sin.img} style={{height:"283px"}}/>
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
    </>
  );
}

export default BoxOffice;
