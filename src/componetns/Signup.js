import { useState } from "react";
import Footer from "./subcomponents/Footer";
import Header from "./subcomponents/Header";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const[error,setError]=useState("")
  const [signupUserDetail, setSignupUserDetail] = useState();
  const[passwordMatch,setPasswordMatch]=useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupUserDetail({ ...signupUserDetail, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (signupUserDetail.password != signupUserDetail.confirm_password) {
        setPasswordMatch(true)
    }
    else{
      setPasswordMatch(false)
        const res=await axios.post("http://localhost:5000/signup",signupUserDetail)
        if(res.data.signupStatus)
          {
            setError(res.data.message)
          }
          else{
            setError(res.data.message )
          }
    }
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

      {/* <!-- Start Main Content --> */}
      <div class="main-content">
        {/* <!-- Start SignUp Section --> */}
        <section class="signup">
          <div class="container">
            <div class="row text-center intro">
              <div class="col-12">
                <h2>Create an Account</h2>
                <p class="text-max-800">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              {/* <!-- Col End --> */}
            </div>
            {/* <!-- Row End --> */}
            <div class="row">
              <div class="col-lg-12">
                {/* <!-- Start Form --> */}
                <form id="signup-form" onSubmit={handleSubmit}>
                  <div class="error-container" style={{fontSize:"20px",fontFamily:"sans-serif",textAlign:"center", color:"red"}}>{error}</div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Username</label>
                        <input
                          class="form-control form-control-name"
                          name="username"
                          id="username"
                          placeholder=""
                          type="text"
                          required=""
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* <!-- Col End --> */}
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          required="required"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* <!-- Col End --> */}
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>First Name</label>
                        <input
                          class="form-control form-control-name"
                          name="first_name"
                          id="first-name"
                          placeholder=""
                          type="text"
                          required=""
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* <!-- Col End --> */}
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Last Name</label>
                        <input
                          class="form-control form-control-name"
                          name="last_name"
                          id="last-name"
                          placeholder=""
                          type="text"
                          required=""
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* <!-- Col End --> */}
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          class="form-control"
                          name="password"
                          id="password"
                          required="required"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* <!-- Col End --> */}
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          class="form-control"
                          name="confirm_password"
                          id="confirm-password"
                          required="required"
                          onChange={handleChange}
                        />
                        {passwordMatch && <span>password doesnot match</span>}
                      </div>
                    </div>
                    {/* <!-- Col End --> */}
                  </div>
                  <div class="form-group">
                    <label
                      class="checkbox-inline mb-3"
                      style={{ width: "100%" }}
                    >
                      <input type="checkbox" required="required" /> I accept the{" "}
                      <a href="terms.html">Terms of Use</a> &amp;{" "}
                      <a href="privacy.html">Privacy Policy</a>.
                    </label>
                    <button class="btn hvr-sweep-to-right" type="submit">
                      Sign Up
                    </button>
                  </div>
                </form>
                {/* <!-- Form End --> */}
                <div class="text-center">
                  Already have an account? <Link to="/login">Login here</Link>
                </div>
              </div>
              {/* <!-- Col End --> */}
            </div>
            {/* <!-- Row End --> */}
          </div>
          {/* <!-- Container End --> */}
        </section>
        {/* <!-- SignUp Section End --> */}
      </div>
      {/* <!-- Main Content End --> */}

      <Footer />
    </>
  );
}

export default Signup;
