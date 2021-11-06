import React from 'react';
import Activities from './Activities/Activities';
import Banner from './Banner/Banner';
import Map from './Map/Map';
import Villas from './Villas/Villas';

const Home = () => {
    return (
        <div className="container">
            <Banner />
            <Villas />
            <Activities />
            <Map />
        </div>
    );
};

export default Home;