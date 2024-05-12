import footerImg from '../../images/footer-logo.png'
function Footer()
{
    return(
        <>
                {/* <!-- Start Footer Section --> */}
        <div class="main-footer">
            <div class="container-fluid">
                <div class="row justify-content-lg-between justify-content-center">
                    <div class="col-md-3">
                        <div class="footer-widget">
                            <div class="widget-content">
                                <div class="footer-logo"><img alt="" class="img-fluid" src={footerImg}/></div>
                                <div class="footer-about-text">
                                    <p class="text-muted">Here , write the complete address of the Registered office address along with telephone number.</p>
                                </div>
                                <div class="footer-social-icons">
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a href="#" title="twitter"><i class="fab fa-2x fa-twitter"></i></a>
                                        </li>
                                        {/* <!-- Social Icons Item 1 End --> */}
                                        <li class="list-inline-item">
                                            <a href="#" title="facebook"><i class="fab fa-2x fa-facebook-f"></i></a>
                                        </li>
                                        {/* <!-- Social Icons Item 2 End --> */}
                                        <li class="list-inline-item">
                                            <a href="#" title="instagram"><i class="fab fa-2x fa-instagram"></i></a>
                                        </li>
                                        {/* <!-- Social Icons Item 3 End --> */}
                                        <li class="list-inline-item">
                                            <a href="#" title="youtube"><i class="fab fa-2x fa-youtube"></i></a>
                                        </li>
                                        {/* <!-- Social Icons Item 4 End --> */}
                                    </ul>
                                </div>
                                {/* <!-- Social Icons End --> */}
                            </div>
                            {/* <!-- Footer Widget Content End --> */}
                        </div>
                        {/* <!-- Footer Widget End --> */}
                    </div>
                    {/* <!-- Col End --> */}
                    <div class="col-md-3">
                        <div class="footer-widget">
                            <div class="widget">
                                <div class="widget-header">
                                    <h2 class="widget-title">Display Type</h2>
                                </div>
                                <div class="widget-content footer-menu">
                                    <ul class="f-link list-unstyled mb-0">
                                        <li>
                                            <a>Action</a>
                                        </li>
                                        <li>
                                            <a>Comedy</a>
                                        </li>
                                        <li>
                                            <a>Drama</a>
                                        </li>
                                        <li>
                                            <a>Horror</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- Widget Content End --> */}
                            </div>
                            {/* <!-- Widget End --> */}
                        </div>
                        {/* <!-- Footer Widget End --> */}
                    </div>
                    {/* <!-- Col End --> */}
                    <div class="col-md-3">
                        <div class="footer-widget">
                            <div class="widget">
                                <div class="widget-header">
                                    <h2 class="widget-title">Production</h2>
                                </div>
                                <div class="widget-content footer-menu">
                                    <ul class="f-link list-unstyled mb-0">
                                        <li>
                                            <a>2018 Year</a>
                                        </li>
                                        <li>
                                            <a>2019 Year</a>
                                        </li>
                                        <li>
                                            <a>2020 Year</a>
                                        </li>
                                        <li>
                                            <a>2021 Year</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- Widget Content End --> */}
                            </div>
                            {/* <!-- Widget End --> */}
                        </div>
                        {/* <!-- Footer Widget End --> */}
                    </div>
                    {/* <!-- Col End --> */}
                    <div class="col-md-3">
                        <div class="footer-widget">
                            <div class="widget">
                                <div class="widget-header">
                                    <h2 class="widget-title">Display Quality</h2>
                                </div>
                                <div class="widget-content footer-menu">
                                    <ul class="f-link list-unstyled mb-0">
                                        <li>
                                            <a>720p HDTV</a>
                                        </li>
                                        <li>
                                            <a>1080p BluRay</a>
                                        </li>
                                        <li>
                                            <a>720p BluRay</a>
                                        </li>
                                        <li>
                                            <a>1080p WEB-DL</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- Widget Content End --> */}
                            </div>
                            {/* <!-- Widget End --> */}
                        </div>
                        {/* <!-- Footer Widget End --> */}
                    </div>
                    {/* <!-- Col End --> */}
                </div>
                {/* <!-- Row End --> */}
            </div>
            {/* <!-- Container End --> */}
        </div>
        {/* <!-- Footer Section End --> */}
        </>
    )
}

export default Footer;