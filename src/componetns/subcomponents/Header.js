import header_logo from "../../images/header-logo.png";
import avatharuser from '../../images/avatar/user.jpg'
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const Navigate=useNavigate()
  const logout=()=>{
    window.sessionStorage.removeItem("user")
    Navigate("/")
  }
  return (
    <>
      {/* <!-- Start Mobile Header --> */}
      <header class="mobile-header">
          <div class="mobile-header-content">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="mobile-logo text-center">
                    <a>
                      <img alt="" class="img-fluid" src={header_logo} />
                    </a>
                  </div>
                </div>
                {/* <!-- Logo Col End --> */}
              </div>
              {/* <!-- Row End --> */}
            </div>
            {/* <!-- Container End --> */}
          </div>
          {/* <!-- Header Content End --> */}
        </header>
        {/* <!-- Mobile Header End --> */}

        <header class="main-nav clearfix is-sticky">
          <div class="container-fluid">
            <div class="row justify-content-between">
              <div class="col-lg-9 pl-0">
                {/* <!-- Start Navigation --> */}
                <nav class="navbar navbar-expand-lg">
                  <a class="navbar-brand" href="index.html">
                    <img
                      alt=""
                      class="img-fluid"
                      src={header_logo}
                    />
                  </a>
                  {/* <!-- Logo End --> */}
                  <div class="site-nav-inner float-left">
                    <button
                      aria-controls="navbarSupportedContent"
                      aria-expanded="true"
                      aria-label="Toggle navigation"
                      class="navbar-toggler"
                      data-target="#navbarSupportedContent"
                      data-toggle="collapse"
                      type="button"
                    >
                      <span class="fa fa-bars"></span>
                    </button>
                    <div
                      class="navbar-collapse navbar-responsive-collapse collapse"
                      id="navbarSupportedContent"
                    >
                      <ul class="nav navbar-nav">
                        <li class="nav-item">
                          <a class="nav-link active" href="index.html">
                            Home
                          </a>
                        </li>
                        {/* <!-- Nav Item 1 End --> */}
                        <li class="nav-item">
                          <a class="nav-link" href="movies.html">
                            Movies
                          </a>
                        </li>
                        {/* <!-- Nav Item 2 End --> */}
                        <li class="nav-item">
                          <a class="nav-link" href="shows.html">
                            Shows
                          </a>
                        </li>
                        {/* <!-- Nav Item 3 End --> */}
                        <li class="nav-item dropdown">
                          <a
                            class="nav-link menu-dropdown"
                            data-toggle="dropdown"
                            href="#"
                          >
                            Pages <i class="fa fa-angle-down"></i>
                          </a>
                          <ul class="dropdown-menu fade-up" role="menu">
                            <li>
                              <a class="dropdown-item" href="about.html">
                                About Us
                              </a>
                            </li>
                            {/* <!-- Sub Nav Item 1 End --> */}
                            <li>
                              <a class="dropdown-item" href="contacts.html">
                                Contact Us
                              </a>
                            </li>
                            {/* <!-- Sub Nav Item 2 End --> */}
                            <li>
                              <a class="dropdown-item" href="404.html">
                                404
                              </a>
                            </li>
                            {/* <!-- Sub Nav Item 3 End --> */}
                            <li>
                              {!window.sessionStorage.getItem("user")&&<Link to="/login">Login</Link>}
                            </li>
                            {/* <!-- Sub Nav Item 4 End --> */}
                            <li>
                              <Link to="/signup">Signup</Link>
                            </li>
                            {/* <!-- Sub Nav Item 5 End --> */}
                          </ul>
                          {/* <!-- Dropdown End --> */}
                        </li>
                        {/* <!-- Nav Item 4 End --> */}
                      </ul>
                      {/* <!-- Nav UL End --> */}
                    </div>
                    {/* <!-- Navbar Collapse End --> */}
                  </div>
                  {/* <!-- Site Nav Inner End --> */}
                </nav>
                {/* <!-- Navigation End --> */}
              </div>
              {/* <!-- Col End --> */}
              <div class="col-lg-3 text-right right-menu-wrap">
                <ul class="nav d-flex align-items-center list-inline m-0 float-right">
                  <li class="nav-item">
                    <div class="nav-search">
                      <a class="nav-link modal-popup" href="#search-popup">
                        <i class="icofont-ui-search"></i>
                      </a>
                    </div>
                    {/* <!-- Search Icon End --> */}
                  </li>
                  <li class="nav-item dropdown">
                    <div class="nav-notification">
                      <a
                        class="nav-link menu-dropdown"
                        data-toggle="dropdown"
                        href="#"
                      >
                        <i class="icofont-notification"></i>
                      </a>
                      <ul
                        class="dropdown-menu dropdown-menu-right fade-up"
                        role="menu"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            <div class="notification-card media">
                              <div class="notification-thumb">
                                <img
                                  alt=""
                                  class="img-fluid"
                                  src="images/notify/thumb-1.jpg"
                                />
                              </div>
                              {/* <!-- Notification thumb end --> */}
                              <div class="notification-content media-body">
                                <h2 class="notification-title">Iron Door</h2>
                                <span class="date">
                                  <i class="far fa-clock"></i> 1 min ago
                                </span>
                              </div>
                              {/* <!-- Notification Content end --> */}
                            </div>
                          </a>
                        </li>
                        {/* <!-- Li 1 end --> */}
                        <li>
                          <a class="dropdown-item" href="#">
                            <div class="notification-card media">
                              <div class="notification-thumb">
                                <img
                                  alt=""
                                  class="img-fluid"
                                  src="images/notify/thumb-2.jpg"
                                />
                              </div>
                              {/* <!-- Notification thumb end --> */}
                              <div class="notification-content media-body">
                                <h2 class="notification-title">The Earth</h2>
                                <span class="date">
                                  <i class="far fa-clock"></i> 3 min ago
                                </span>
                              </div>
                              {/* <!-- Notification Content end --> */}
                            </div>
                          </a>
                        </li>
                        {/* <!-- Li 2 end --> */}
                        <li>
                          <a class="dropdown-item" href="#">
                            <div class="notification-card media">
                              <div class="notification-thumb">
                                <img
                                  alt=""
                                  class="img-fluid"
                                  src="images/notify/thumb-3.jpg"
                                />
                              </div>
                              {/* <!-- Notification thumb end --> */}
                              <div class="notification-content media-body">
                                <h2 class="notification-title">City Dreams</h2>
                                <span class="date">
                                  <i class="far fa-clock"></i> 10 min ago
                                </span>
                              </div>
                              {/* <!-- Notification Content end --> */}
                            </div>
                          </a>
                        </li>
                        {/* <!-- Li 3 end --> */}
                      </ul>
                      {/* <!-- Notification List End --> */}
                    </div>
                    {/* <!-- Notification End --> */}
                  </li>
                  {/* <!-- Nav Item 4 End --> */}
                  <li class="nav-item">
                    <div class="nav-filter">
                      <a class="nav-link openbtn" onClick="openNav()">
                        <svg
                          class="filter-animate"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 14v-4c-1.619 0-2.906.267-3.705-1.476-.697-1.663.604-2.596 1.604-3.596l-2.829-2.828c-1.033 1.033-1.908 2.307-3.666 1.575-1.674-.686-1.404-2.334-1.404-3.675h-4c0 1.312.278 2.985-1.404 3.675-1.761.733-2.646-.553-3.667-1.574l-2.829 2.828c1.033 1.033 2.308 1.909 1.575 3.667-.348.849-1.176 1.404-2.094 1.404h-1.581v4c1.471 0 2.973-.281 3.704 1.475.698 1.661-.604 2.596-1.604 3.596l2.829 2.829c1-1 1.943-2.282 3.667-1.575 1.673.687 1.404 2.332 1.404 3.675h4c0-1.244-.276-2.967 1.475-3.704 1.645-.692 2.586.595 3.596 1.604l2.828-2.829c-1-1-2.301-1.933-1.604-3.595l.03-.072c.687-1.673 2.332-1.404 3.675-1.404zm-12 2c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path>
                        </svg>
                      </a>
                    </div>
                    {/* <!-- Sidebar Filter Button End --> */}
                  </li>
                  {/* <!-- Nav Item 2 End --> */}
                  <li class="nav-item">
                    <div class="nav-account ml-2">
                      <div class="dropdown">
                        <div
                          aria-expanded="false"
                          aria-haspopup="true"
                          data-toggle="dropdown"
                          id="dropdown-account"
                          role="button"
                        >
                          <img
                            alt=""
                            class="img-fluid user-icon rounded-circle"
                            src={avatharuser}
                          />
                        </div>
                        <ul class="dropdown-menu dropdown-menu-right fade-up">
                          <li>
                            <a
                              class="dropdown-item"
                              href="account-settings.html"
                            >
                              Account Settings
                            </a>
                          </li>
                          {/* <!-- Li 1 end --> */}
                          <li>
                            <a class="dropdown-item" href="pricing-plan.html">
                              pricing plans
                            </a>
                          </li>
                          {/* <!-- Li 2 end --> */}
                          <li>
                            <a class="dropdown-item" href="#" onClick={logout}>
                              Logout
                            </a>
                          </li>
                          {/* <!-- Li 3 end --> */}
                        </ul>
                        {/* <!-- Account List End --> */}
                      </div>
                      {/* <!-- Account Drop Down End --> */}
                    </div>
                    {/* <!-- Account Menu End --> */}
                  </li>
                  {/* <!-- Nav Item 3 End --> */}
                </ul>
                {/* <!-- Nav UL End --> */}
              </div>
              {/* <!-- Col End --> */}
            </div>
            {/* <!-- Row End --> */}
          </div>
          {/* <!-- Container End --> */}
        </header>
        {/* <!-- Header End --> */}
    </>
  );
}

export default Header;