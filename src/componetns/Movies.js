import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Movies.css'

import img from '../gettyimages.jpg'

class Movies extends Component {
    render() {
        return (
            <Carousel centerMode  centerSlidePercentage={50} showThumbs={false} infiniteLoop  autoPlay transitionTime={300} dynamicHeight={false}>
                <div>
                    <img src="http://localhost:5000/images/1715321957618.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://localhost:5000/images/1715322007436.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://localhost:5000/images/1715330669818.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img} />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src={img} />
                    <p className="legend">Legend 5</p>
                </div>
            </Carousel>
        );
    }
}

export default Movies;