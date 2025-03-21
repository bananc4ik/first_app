import React from 'react';
import HeaderLogo from '../../images/HeaderImages/SHOP.CO (1).svg'
import HeaderListImage from '../../images/HeaderImages/Frame (1).svg'
import HeaderStyles from './Header2.css';
import Header_ICON_SHOP1 from '../../images/HeaderImages/SHOP.svg';
const Header2 = () =>{
    return(
        
        <div className='d-flex align-items-center header2_box'>
            <img className='col-lg-2 col-md-3' src={HeaderLogo} alt="LOGO"/>

            <div className='col-lg-4 d-lg-flex d-md-none d-md-none flex-row align-items-center header_panel'>
                <div className='d-flex align-items-center'>
                    <p>Shop</p>
                    <img src={HeaderListImage} alt="" />
                </div>
                            
                <p>On Sale</p> 
                <p>New Arrivals</p>
                <p>Brands</p>
            </div>
            

            

            <input className='col-lg-4' placeholder='Search for products...' id='header_input' type="text" />

            <img src={Header_ICON_SHOP1} alt="" />

        </div>

        
    )
}
export default Header2;