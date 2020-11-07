import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

const Carousels = () => {
    return (
        <Carousel>
            <Carousel.Item interval={50000}>
                <div className="img-content">
                     <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/assets/images/slide1.png"}
                alt="First slide"
                />
                </div>
                <Carousel.Caption>
                <h3>iPhone 6 32Gb <br></br>Black</h3>
                <p>At first, for some time, I was not able to answer him one word; but as he had taken me in his arms I held fast by him, or I should have fallen to the ground.</p>
                <a href="#" className="btn btn-light">Buy Now</a>
                </Carousel.Caption>
                
            </Carousel.Item>

            <Carousel.Item interval={50000}>
                <div className="img-content">
                     <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/assets/images/slider2.jpg"}
                alt="First slide"
                />
                </div>
                <Carousel.Caption>
                <h3>The 1st of its kind</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est neque, pretium eget turpis vitae</p>
                <a href="#" className="btn btn-light">SHOP Now</a>
                </Carousel.Caption>
                
            </Carousel.Item>
            <Carousel.Item interval={50000}>
                <div className="img-content">
                     <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/assets/images/slider3.jpg"}
                alt="First slide"
                />
                </div>
                <Carousel.Caption>
                <h3>Ladies collection</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est neque, pretium eget turpis vitae</p>
                <a href="#" className="btn btn-light">SHOP Now</a>
                </Carousel.Caption>
                
            </Carousel.Item>
        </Carousel>
    )
}

export default Carousels;