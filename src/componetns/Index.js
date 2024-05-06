import BoxOffice from "./subcomponents/BoxOffice";
import Footer from "./subcomponents/Footer";
import Header from "./subcomponents/Header";
import LastSeasonSection from "./subcomponents/LastSeasonSection";
import MainSlider from "./subcomponents/MainSlider";
import MainTabs from "./subcomponents/MainTabs";
import Popular from "./subcomponents/Popular";
import TrendingNow from "./subcomponents/TrendingNow";

function Index() {
  return (
    <>
      {/* Start Preloader */}
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
      </div>
      {/* Preloader end */}

      {/* Header Componet Start */}
      <div className="main" id="main">
        <Header />
        {/* main slider start */}
        <div className="main-slider" id="main-slider">
          <MainSlider />
          {/* main slider end */}
        </div>
        {/* main content start */}
        <div className="main-content">
          <MainTabs />
          <Popular />
          <BoxOffice />
          <TrendingNow />
          <LastSeasonSection />
        </div>

        <Footer/>
      </div>
      {/* Header Componet end */}
    </>
  );
}
export default Index;
