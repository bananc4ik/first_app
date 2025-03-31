import React from 'react';
import Header from '../components/header/Header';
import Header2 from '../components/header/Header2';
import MainBox1 from '../components/main/MainBox1'
const HomePage = () =>{
    return(
        <div className='home_page'>
            <Header/>
            <Header2/>
            <MainBox1/>
        </div>
        
    );
}

export default HomePage;