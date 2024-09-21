import React from 'react';
import Banner from '../Banner';
import About from '../About';
import Service from '../Service';
import Portfolio from '../Portfolio';
import Blog from '../Blog';
import Contact from '../Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Portfolio></Portfolio>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;