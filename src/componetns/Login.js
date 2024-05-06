import { useState } from "react";
import loginImg from "../images/login.png";
import { Link, useNavigate } from "react-router-dom";
import Header from "./subcomponents/Header";
import Footer from "./subcomponents/Footer";
import axios from "axios";
function Login() {
  const Navigate=useNavigate()
  const [loginUser, setLoginUser] = useState();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const res=await axios.post("http://localhost:5000/login",loginUser)
    window.sessionStorage.setItem("user",res.data.token)
    Navigate("/")
    // console.log(window.sessionStorage.getItem("user"))
  };
  return (
    <>
      {/* <!-- Start Preloader --> */}
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
      </div>
      {/* <!-- Preloader End --> */}

      <Header />
      <div className="main-content">
        {/* <!-- Start Login Section --> */}
        <section class="login">
          <div class="container">
            <div class="row text-center intro">
              <div class="col-12">
                <h2>Welcome Back !</h2>
                <p class="text-max-800">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              {/* <!-- Col End --> */}
            </div>
            {/* <!-- Row End --> */}
            <div class="row">
              <div class="col-lg-6">
                {/* <!-- Start Form --> */}
                <form id="login-form" class="mb-4" onSubmit={handleSubmit}>
                  <div class="error-container"></div>
                  <div class="form-group">
                    <label class="control-label col-xs-4">Username</label>
                    <input
                      type="text"
                      class="form-control"
                      name="username"
                      required="required"
                      onChange={handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <label class="control-label col-xs-4">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      required="required"
                      onChange={handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="btn btn-block hvr-sweep-to-right btn-primary btn-lg"
                    >
                      Login
                    </button>
                  </div>
                  <a href="reset-password.html">Lost your Password?</a>
                </form>
                {/* <!-- Form End --> */}
                <div class="row d-flex align-items-center mb-4">
                  <div class="col-md-6">
                    <a
                      href="watch-movie.html"
                      class="btn facebook-color d-block hvr-sweep-to-right mb-3"
                      tabindex="0"
                    >
                      <i class="icofont-facebook mr-2" aria-hidden="true"></i>
                      Facebook
                    </a>
                  </div>
                  {/* <!-- Col End --> */}
                  <div class="col-md-6">
                    <a
                      href="watch-movie.html"
                      class="btn twitter-color d-block hvr-sweep-to-right mb-3"
                      tabindex="0"
                    >
                      <i class="icofont-twitter mr-2" aria-hidden="true"></i>
                      Twitter
                    </a>
                  </div>
                  {/* <!-- Col End --> */}
                </div>
                {/* <!-- Row End --> */}
                <p class="text-center">
                  Don't have an account? <Link to="/signup">Sign up here!</Link>
                </p>
              </div>
              {/* <!-- Col End --> */}
              <div class="col-lg-6">
                <img class="img-fluid" src={loginImg} alt="" />
              </div>
              {/* <!-- Col End --> */}
            </div>
            {/* <!-- Row End --> */}
          </div>
          {/* <!-- Container End --> */}
        </section>
      </div>
      {/* main content end */}

      <Footer />
    </>
  );
}

export default Login;
