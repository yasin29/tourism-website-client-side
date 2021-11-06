import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <Carousel className="banner" variant="dark" interval={1500}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 zoom"
                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cb/c7/18/photo0jpg.jpg?w=900&h=-1&s=1"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>LUXURY</h2>
                        <h6>LUXURY REDEFINED IN THE LAP OF UNSPOILED WILDERNESS.</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 zoom"
                        src="https://i.ytimg.com/vi/5Q_UrLtwjCs/maxresdefault.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2>RELAX</h2>
                        <h6>Your perfect get away awaits!</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 zoom"
                        src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/8e/4f/f2/balishira-resort.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2>NATURE</h2>
                        <h6>Luxury in the forest</h6>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;