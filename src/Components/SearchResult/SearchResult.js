import React from 'react';
import SideBar from '../SideBar/SideBar';
import Cards from '../Cards/Cards';
import Pagination from 'react-bootstrap/Pagination';

const SearchResult = () => {
    return (
        <section className="search-result">
            <div className="container">
                <div className="row">
                    <SideBar/>
                    <div className="col-lg-9 col-md-9 mt-4 card-content">
                        <Cards/>
                    </div>
                    <div className="pagination-row col-12">
                        <Pagination>
                            <Pagination.Prev />

                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Item active>{4}</Pagination.Item>
                            <Pagination.Item>{5}</Pagination.Item>
                            <Pagination.Item>{6}</Pagination.Item>
                            <Pagination.Item>{7}</Pagination.Item>
                            <Pagination.Item>{8}</Pagination.Item>

                            <Pagination.Next />
                        </Pagination>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchResult;