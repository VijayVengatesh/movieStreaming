import slider1 from "../../images/slider/slider1.jpg";
import slider2 from "../../images/slider/slider2.jpg";
import slider3 from "../../images/slider/slider3.jpg";
function MainSlider() {
  const sliderDetails = [
    {
      new: "New",
      name: "Iron door",
      releaseYear: "2021",
      agelimit: "18+",
      duration: "2h 6m",
      img: slider1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      new: "New",
      name: "Iron gate",
      releaseYear: "2021",
      agelimit: "18+",
      duration: "2h 6m",
      img: slider2,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      new: "New",
      name: "Iron window",
      releaseYear: "2021",
      agelimit: "18+",
      duration: "2h 6m",
      img: slider3,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];
  return (
    <>
      <div class="slider big-slider slider-wrap">
        {sliderDetails.map((sin, index) => (
          <div
            key={index}
            class="slide slick-bg bg-1"
            style={{ backgroundImage: `url(${sin.img})` }}
            
          >
            <div class="container-fluid position-relative h-100">
              <div class="slider-content h-100">
                <div class="row align-items-center h-100">
                  <div class="col-xl-6 col-lg-12 col-md-12">
                    <h3 data-animation-in="fadeInUp" data-delay-in="1">
                      <span class="badge bg-warning text-dark">{sin.new}</span>
                    </h3>
                    <h1 data-animation-in="fadeInUp" data-delay-in="1">
                      {sin.name}
                    </h1>
                    <div
                      class="slide-info"
                      data-animation-in="fadeInUp"
                      data-delay-in="1"
                    >
                      <span>{sin.releaseYear}</span>{" "}
                      <span class="radius">{sin.agelimit}</span>{" "}
                      <span>{sin.duration}</span>
                    </div>
                    <p data-animation-in="fadeInUp" data-delay-in="1">
                      {sin.description}
                    </p>
                    <div
                      class="slider-buttons d-flex align-items-center"
                      data-animation-in="fadeInUp"
                      data-delay-in="1"
                    >
                      <a
                        class="btn hvr-sweep-to-right"
                        href="watch-movie.html"
                        tabindex="0"
                      >
                        <i aria-hidden="true" class="fa fa-play mr-2"></i>Play
                        Now
                      </a>{" "}
                      <a
                        class="btn hvr-sweep-to-right ml-3"
                        href="#"
                        tabindex="0"
                      >
                        <i class="fas fa-plus mr-2"></i>My List
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default MainSlider;
