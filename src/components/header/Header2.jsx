import React from 'react';
import HeaderLogo from '../../images/HeaderImages/SHOP.CO (1).svg'
import HeaderListImage from '../../images/HeaderImages/Frame (1).svg'
import HeaderStyles from './Header2.css';
const Header2 = () =>{
    return(
        
        <div className='d-flex'>
            <img src={HeaderLogo} alt="LOGO"/>
            <div>

                <div className='d-flex align-items-center'>
                    <p>Shop</p>
                    <img src={HeaderListImage} alt="" />
                </div>
            </div>

            <p>On Sale</p>

            <p>New Arrivals</p>

            <p>Brands</p>

            <input className='col-lg-6' placeholder='Search for products...' id='header_input' type="text" />

        </div>

        
    )
}
export default Header2;