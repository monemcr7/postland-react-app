import React from 'react';

const Cards = () => {
    return (
        <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
                <div className="card">
                <div className="img-content">
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/assets/images/product1.png"}
                    alt="Product"/>
                </div>
                <h2> Apple TV 32GB</h2>
                <h3>Black</h3>
                <h4>$49.99</h4>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
                <div className="card">
                <div className="img-content">
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/assets/images/product3.png"}
                    alt="Product"/>
                </div>
                <h2> Pebble Time</h2>
                <h3>Red</h3>
                <h4>$29.99</h4>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
                <div className="card">
                <div className="img-content">
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/assets/images/product2.png"}
                    alt="Product"/>
                </div>
                <h2> Zendure 4-Port USB</h2>
                <h3>White</h3>
                <h4>$49.99</h4>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
                <div className="card">
                <div className="img-content">
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/assets/images/product4.png"}
                    alt="Product"/>
                </div>
                <h2> Withings Smart Body <br></br>Analyzer ws-50</h2>
                <h3>Black</h3>
                <h4>$39.99</h4>
                </div>
            </div>

            <div className="col-lg-8 col-12 card-price">
                <div className="img-content">
                    <span className="label-price">$39.99</span>
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/assets/images/product5.png"}
                    alt="Product"/>
                </div>
                <div className="card-info">
                    <div className="card-name">
                        <h2>JBL Charge 2+</h2>
                        <h3>Black</h3>
                    </div>
                    <div className="card-action">
                        <div className="card-label">
                            <span>16 GB</span>
                            <button type="button">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cards;