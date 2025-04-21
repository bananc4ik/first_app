import React from 'react';
import Header from '../components/header/Header';
import Header2 from '../components/header/Header2';
import MainBox1 from '../components/main/MainBox1';
import TypesClothing from '../components/main/TypesClothing';
import LatestOffers from '../components/footer/LatestOffers';
import Footer from '../components/footer/footer';
const HomePage = () =>{
    return(
        <div className='home_page'>
            <Header/>
            <Header2/>
            <MainBox1/>
            <TypesClothing/>
            <LatestOffers/>
            <Footer/>

        </div>
        
    );
}

export default HomePage;