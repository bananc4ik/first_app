import React, { useEffect } from 'react';
import ExitImage from '../../images/HeaderImages/Frame.svg';
import './Header.css';
import useEfect from 'react'
const Header = () =>{

    const exitHeader1 = () =>{
        let exitHeader = document.getElementById("header_box1");
        exitHeader.style.display = 'none';
        
    }

    

    
    return(

        
        <div id='header_box1' className="d-flex justify-content-between align-items-center header_box1">
            <div id='banan' className="col-11 d-flex justify-content-center header_box1_title" >
                <p>Sign up and get 20% off to your first order. <a href="#">Sign Up Now</a></p>
            </div>
            <div className="col-1 justify-content-center">
                <input onClick={exitHeader1} id='exit_header' type='image'src={ExitImage} alt="" />
            </div>
           
        </div>
        
   
    )



   

    
    
    
}




export default Header;