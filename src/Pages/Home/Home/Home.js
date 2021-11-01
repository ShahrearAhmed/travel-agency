import React from 'react';
import Banner from '../Banner/Banner';
import Event from '../Event/Event';
import Events from '../Events/Events';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Events></Events>
        </div>
    );
};

export default Home;