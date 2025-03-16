import React from 'react';
import ExitImage from '../../images/HeaderImages/Frame.svg';
import HeaderStyle from './Header.css';

const Header = () =>{
    return(
        <div className="d-flex justify-content-between align-items-center header_box1">
            <div className="col-11 d-flex justify-content-center header_box1_title" >
                <p>Sign up and get 20% off to your first order. <a href="#">Sign Up Now</a></p>
            </div>
            <div className="col-1 justify-content-center">
                <img src={ExitImage} alt=""></img>
            </div>
           
        </div>
          
    )
}
export default Header;