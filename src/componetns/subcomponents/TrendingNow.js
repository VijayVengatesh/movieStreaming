import Trending1 from '../../images/trending/01.jpg'
function TrendingNow()
{
    const trendingMovies=[
        {
            img:Trending1,
            name:'FREEDOM',
            releaseDate:"2021",
            ageLimit:"18+",
            movieType:"Action"
        },
        {
            img:Trending1,
            name:'FREEDOM',
            releaseDate:"2021",
            ageLimit:"18+",
            movieType:"Action"
        },
        {
            img:Trending1,
            name:'FREEDOM',
            releaseDate:"2021",
            ageLimit:"18+",
            movieType:"Action"
        },
        {
            img:Trending1,
            name:'FREEDOM',
            releaseDate:"2021",
            ageLimit:"18+",
            movieType:"Action"
        },
        {
            img:Trending1,
            name:'FREEDOM',
            releaseDate:"2021",
            ageLimit:"18+",
            movieType:"Action"
        },
        {
            img:Trending1,
            name:'FREEDOM',
            releaseDate:"2021",
            ageLimit:"18+",
            movieType:"Action"
        }
        ]
    return(
        <>
        {/* <!-- Start Trending Section --> */}
            <section class="trending">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2 class="block-title">Trending Now</h2>
                            <div class="row">
                                {trendingMovies.map((sin,index)=>(
                                    <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2" key={index}>
                                    <div class="video-block">
                                        <div class="video-thumb position-relative thumb-overlay">
                                            <a><img alt="" class="img-fluid" src={Trending1}/></a>
                                            <div class="box-content">
                                                <ul class="icon">
                                                    <li>
                                                        <a href="watch-movie.html"><i class="fas fa-play"></i></a>
                                                    </li>
                                                    <li>
                                                        <a><i class="fas fa-plus"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="movie-single.html"><i class="fas fa-info"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* <!-- Box Content End --> */}
                                        </div>
                                        {/* <!-- Video Thumb End --> */}
                                        <div class="video-content">
                                            <h2 class="video-title"><a href="movie-single.html">Freedom</a></h2>
                                            <div class="video-info d-flex align-items-center">
                                                <span class="video-year">2021</span> <span class="video-age">+18</span> <span class="video-type">Action</span>
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
                    </div>
                    {/* <!-- Row End --> */}
                </div>
                {/* <!-- Container End --> */}
            </section>
            {/* <!-- Trending Section End --> */}
        </>
    )
}
export default TrendingNow;