import React from 'react';

const Bestsaller = () => {
    return (
        <section className="seller">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center sec-title">
                        <h2 >Best Sellers</h2>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 card-seller">
                        <div className="card">
                            <div className="img-content">
                                <img
                                className="d-block w-100"
                                src={process.env.PUBLIC_URL + "/assets/images/product6.png"}
                                alt="Product"/>
                            </div>
                            <h2> Beanie</h2>
                            <h3>Green</h3>
                            <h4><span>$39.99</span> $29.99</h4>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 card-seller">
                        <div className="card">
                            <div className="img-content">
                                <img
                                className="d-block w-100"
                                src={process.env.PUBLIC_URL + "/assets/images/product7.png"}
                                alt="Product"/>
                            </div>
                            <h2> T-Shirt With a Print</h2>
                            <h3>Dark Blue</h3>
                            <h4><span>$29.99</span> $19.99</h4>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 card-seller">
                        <div className="card">
                            <div className="img-content">
                                <img
                                className="d-block w-100"
                                src={process.env.PUBLIC_URL + "/assets/images/product8.png"}
                                alt="Product"/>
                            </div>
                            <h2> Pile-Lined Hooded Jacket</h2>
                            <h3>Dark Blue</h3>
                            <h4><span>$49.99</span> $39.99</h4>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 card-seller">
                        <div className="card">
                            <div className="img-content">
                                <img
                                className="d-block w-100"
                                src={process.env.PUBLIC_URL + "/assets/images/product9.png"}
                                alt="Product"/>
                            </div>
                            <h2> Trainers</h2>
                            <h3>Space Grey</h3>
                            <h4><span>$39.99</span> $29.99</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bestsaller;