import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link, useNavigate } from "react-router-dom";
import popularMovie1 from "../../images/popular/01.jpg";
import axios from "axios";
function Popular({popMovies}) {
  const Navigate=useNavigate()
  console.log("popular movies",popMovies)
  const popMovie=popMovies
  const watch = async (i) => {
    const res = await axios.put(`http://localhost:5000/viewsincrement/${i}`);
    console.log(res.data);
    Navigate(`/watchmovie/${i}`);
  };
  if(!popMovies)
    {
      return(<h1>popular Movies no data for fetching</h1>)
    }
  return (
    <>
      {/* <!-- Start Pupular Section --> */}
      <section class="pupular">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="block-title">Popular Movies </h2>
              {/* <!-- Start Pupular Slider --> */}
              <OwlCarousel
                className="owl-theme"
                margin={10}
                items={5}
                responsive={{
                  0: { items: 2 },
                  600: { items: 3 },
                  1000: { items: 5 },
                }}
                dragClass="owl-drag"
                autoplay="true"
                autoplayTimeout='3000'
                dotClass="customdots"
                responsiveClass="true"
              >
                {Array.isArray(popMovie) &&
                  popMovie.map((sin, index) => (
                    <div
                      className="item cal-auto"
                      key={index}
                      style={{marginRight: "10px" }}
                    >
                      <div className="video-block">
                        <div className="video-thumb position-relative thumb-overlay">
                          <a>
                            <img
                              alt=""
                              className="img-fluid"
                              src={`http://localhost:5000/images/${sin.image}`}
                            />
                          </a>
                          <div className="box-content">
                            <ul className="icon">
                              <li>
                                <Link
                                  onClick={() => watch(sin._id)}
                                >
                                  <i className="fas fa-play"></i>
                                </Link>
                              </li>
                              <li>
                                <a>
                                  <i className="fas fa-plus"></i>
                                </a>
                              </li>
                              <li>
                                <a href="movie-single.html">
                                  <i className="fas fa-info"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="video-content">
                          <h2 className="video-title">
                            <a href="movie-single.html">{sin.name}</a>
                          </h2>
                          <div className="video-info d-flex align-items-center">
                            <span className="video-year">
                              {sin.releaseYear}
                            </span>{" "}
                            <span className="video-age">{sin.ageLimit}</span>{" "}
                            <span className="video-type">{sin.movieType}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </OwlCarousel>
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
