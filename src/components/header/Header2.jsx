import React from 'react';
import HeaderLogo from '../../images/HeaderImages/SHOP.CO (1).svg';
import HeaderListImage from '../../images/HeaderImages/Frame (1).svg';
import HeaderStyles from './Header2.css';
import Header_ICON_SHOP1 from '../../images/HeaderImages/SHOP.svg';
import Header_Icon_Profile from '../../images/HeaderImages/Profile_image.svg';
import Header_Search from '../../images/HeaderImages/HEADER_SEARCH.svg';
import Menu from '../../images/HeaderImages/Header_Menu.svg';
import {Link} from "react-router-dom";
const Header2 = () =>{
    return(
        
        <div className='d-flex align-items-center justify-content-sm-between justify-content-between header2_box'>

            <div className='d-flex justify-content-between col-lg-1 d-flex'>
                <img className='col-3 col-sm-3 d-lg-none d-md-block ' src={Menu} alt="menu" />
                <Link to={`/`}><img className='col-lg-12 col-8 col-sm-8 d-lg-block d-md-block' src={HeaderLogo} alt="LOGO"/></Link>

            </div>
            

            <div className='col-lg-4 d-lg-flex d-sm-none d-none flex-row align-items-center header_panel'>
                <div className='d-flex align-items-center'>
                    <p>Shop</p>
                    <img src={HeaderListImage} alt="" />
                </div>
                            
                <p>On Sale</p> 
                <p>New Arrivals</p>
                <p>Brands</p>
            </div>
            

            

            <input className='d-lg-flex d-sm-none d-none col-lg-4' placeholder='Search for products...' id='header_input' type="text" />

            <div className='col-lg-1 col-md-2 d-flex' style={{gap:'16px'}}>

                <img className='d-lg-none d-md-block col-lg-4 col-md-2 ' src={Header_Search} alt="" />

                <img className='col-lg-4 col-md-2' src={Header_ICON_SHOP1} alt="" />

                <Link to={'/auth'} className='col-lg-4 col-md-2'><img className='col-12' src={Header_Icon_Profile} alt="" /></Link>

            </div>
            


        </div>

        
    )
}
export default Header2;