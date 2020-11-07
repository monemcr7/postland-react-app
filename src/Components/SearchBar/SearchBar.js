import React from 'react';

const SearchBar = () => {
    return (
        <section className="searchBar">
            <div className="container">
                <div className="row search-content">
                    <div className="col-lg-3 col-12 select-col">
                        <div className="form-group">
                            <label>sort by:</label>
                            <select className="form-control" name="sort">
                                <option defaultValue="Best Match"> Best Match</option> 
                            </select>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12 center-input">
                        <div className="row">
                            <div className="col-md-5 keyword-input">
                                <div className="form-group">
                                    <label>Keywords:</label>
                                    <input type="text" className="form-control" name="keywords" placeholder="Tablet" />
                                </div>
                            </div>
                            <div className="col-md-4 price-input">
                                <div className="form-group ">
                                    <label>Price:</label>
                                    <input type="number" className="form-control fr-input" name="keywords" placeholder="Price" />
                                    <input type="number" className="form-control" name="keywords" placeholder="Price" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" id="customCheck1" name="customCheck" className="custom-control-input" defaultChecked  />
                                    <label className="custom-control-label" htmlFor="customCheck1">Free Shipping</label>
                                </div>
                            </div>
                        </div>
                        
                        
                        
                    </div>

                    <div className="col-lg-3 col-12 select-col">
                        <label>Ship to:</label>
                            <select className="form-control" name="sort">
                                <option defaultValue="Country"> Country</option> 
                            </select>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchBar;