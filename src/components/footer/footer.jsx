import React from "react";
import FooterLogo from '../../images/HeaderImages/SHOP.CO (1).svg';
import FooterStyles from './footer.css'

import TwitterLogo from '../../images/FooterImage/1.svg';
import FacebookLogo from '../../images/FooterImage/2.svg';
import InstagramLogo from '../../images/FooterImage/3.svg';
import GitHubLogo from '../../images/FooterImage/4.svg';
import VisaLogo from '../../images/FooterImage/Badge.svg';
import MasterCardLogo from '../../images/FooterImage/Badge(1).svg';
import PayPalLogo from '../../images/FooterImage/Badge(2).svg';
import ApplePayLogo from '../../images/FooterImage/Badge(3).svg';
import GooglePayLogo from '../../images/FooterImage/Badge(4).svg';
const footer = () =>{
    return(
        <div className="container-fluid abc">

            <div className="row">

                <div className="d-flex flex-row flex-wrap footer">

                    <div className="col-lg-3 col-sm-12 col-12 footer_box">

                        <img src={FooterLogo} alt="" />

                        <p className="col-lg-10 col-sm-12 col-12  footer_description">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>

                        <div className="col-lg-6 col-xl-7 col-md-2 col-sm-3 d-flex justify-content-between">
                            <img src={TwitterLogo} alt="" />
                            <img src={FacebookLogo} alt="" />
                            <img src={InstagramLogo} alt="" />
                            <img src={GitHubLogo} alt="" />

                        </div>


                    </div>



                    <div className="col-lg-2 col-sm-6 col-6 footer_box">

                        <p className="footer_title">Company</p>
                        <p className="footer_text">About</p>
                        <p className="footer_text">Features</p>
                        <p className="footer_text">Works</p>
                        <p className="footer_text">Career</p>

                    </div>


                    <div className="col-lg-2 col-sm-6 col-6 footer_box ">

                        <p className="footer_title">Career</p>
                        <p className="footer_text">Customer Support</p>
                        <p className="footer_text">Delivery Details</p>
                        <p className="footer_text">Terms & Conditions</p>
                        <p className="footer_text">Privacy Policy</p>
                        

                    </div>


                    <div className="col-lg-2 col-sm-6 col-6 footer_box ">

                        <p className="footer_title">FAQ</p>
                        <p className="footer_text">Account</p>
                        <p className="footer_text">Manage Deliveries</p>
                        <p className="footer_text">Orders</p>
                        <p className="footer_text">Payments</p>
                        

                    </div>


                    <div className="col-lg-2 col-sm-6 col-6 footer_box">
                    
                        <p className="footer_title">Resources</p>
                        <p className="footer_text">Free eBooks</p>
                        <p className="footer_text">Development Tutorial</p>
                        <p className="footer_text">How to - Blog</p>
                        <p className="footer_text">Youtube Playlist</p>


                    </div>

                   
                    







                </div>

                <div className="d-flex flex-lg-row flex-sm-column flex-column justify-content-lg-between justify-content-sm-center justify-content-center align-items-sm-center justify-content-center">
                    <p className="footer_description_title">Shop.co © 2000-2023, All Rights Reserved</p>

                    <div>
                        <img src={VisaLogo} alt="" />
                        <img src={MasterCardLogo} alt="" />
                        <img src={PayPalLogo} alt="" />
                        <img src={ApplePayLogo} alt="" />
                        <img src={GooglePayLogo} alt="" />






                    </div>
                </div>

                

            </div>

        </div>
    )
}

export default footer;












