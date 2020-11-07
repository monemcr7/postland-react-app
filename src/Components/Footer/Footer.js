import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2 col-12">
                        <img src={process.env.PUBLIC_URL + "/assets/images/logo2.png"}/>
                    </div>
                    <div className="col-lg-6 col-md-8 col-12">
                        <ul className="list-unstyled links-footer">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Tean</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contacts</a></li>                            
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-2 col-12">
                        <ul className="list-unstyled soical">
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                        </ul>
                    </div>

                    <div className="col-12"><hr></hr></div>

                    <div className="col-md-6 col-12">
                        <p>
                        She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for having been born on a Friday.
                        </p>
                    </div>
                    <div className="privacy-links col-md-6 col-12">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms and Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;