import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Slider from '../../Components/Carousels/Carousels';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SearchResult from '../../Components/SearchResult/SearchResult';
import BestSeller from '../../Components/BestSaller/BestSaller';
import Client from '../../Components/Client/Client';

const MainApplicationLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Slider />
            <SearchBar />
            <SearchResult />
            <BestSeller />
            <Client />
            <Footer />
        </React.Fragment>
    )
}

export default MainApplicationLayout;