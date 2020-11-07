import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const Header = () => {
    return (
        <section className="header" >
            <Navbar className="top-header" expand="lg">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-3 col-md-4 col-3 brand-col">
                            <div className="left-navbar-logo">
                                <span>
                                    <i className="fas fa-bars"></i>
                                </span>    
                                <Navbar.Brand href="#home"><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"}/></Navbar.Brand>
                            </div>
                        </div>

                        <div className="col-lg-6 col-4 nav-col">
                            <Navbar.Collapse>
                                <Nav>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Devices</Nav.Link>
                                <Nav.Link href="#home">Delivery & Payment</Nav.Link>
                                <Nav.Link href="#link">Guarantee</Nav.Link>
                                <Nav.Link href="#link">About Us</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>

                        <div className="col-lg-3 col-md-8 col-9 nav-right-s">
                            <div className="last-sec">
                                <div className="cart">
                                    <i className="fas fa-shopping-cart"></i>
                                    <span>Cart</span>
                                    <span className="num"> 0</span> 
                                </div>
                                <button type="button" className="btn btn-light">SIGN IN</button>
                            </div>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </div>

                        <div className="col-12 hidden-large">
                        <Navbar.Collapse id="basic-navbar-nav" className="">
                                <Nav>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Devices</Nav.Link>
                                <Nav.Link href="#home">Delivery & Payment</Nav.Link>
                                <Nav.Link href="#link">Guarantee</Nav.Link>
                                <Nav.Link href="#link">About Us</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </div>
                </div>                
            </Navbar>

                {/* Start Bottom Header  */}
                <div className="bottom-header">
                <Navbar>
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-8 col-md-8 nav-col-botton">
                        <Navbar.Toggle aria-controls="basic-navbar-nav2" />
                            <Navbar.Collapse id="basic-navbar-nav2">
                                <Nav>
                                <Nav.Link href="#home">Top Sales</Nav.Link>
                                <Nav.Link href="#link">Brand Focus</Nav.Link>
                                <Nav.Link href="#home" className="active">Hi-tech</Nav.Link>
                                <Nav.Link href="#link">Best Sellers</Nav.Link>
                                <Nav.Link href="#link">Projects</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                        <div className="col-lg-4 col-md-4 right-support">
                            <a href="#" className="support-link nav-link">SUPPORT</a>
                            <div className="search-content">
                                <button type="button"><i className="fas fa-search"></i></button>
                                <input type="text" className="form-control" name="search" placeholder="I’m looking for ..." />
                            </div>
                        </div>

                       
                    </div>
                </div>                
            </Navbar>
                </div>
        </section>
    )
}

export default Header;