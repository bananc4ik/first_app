import React from "react";
import LatestOffersStyle from './LatestOffers.css'
const LatestOffers = () =>{
    return(
        <div className="container-fluid latest_offers_box">

            <div className="row">

                <div className="d-flex flex-lg-row flex-sm-column flex-column justify-content-around ">

                    <p className="col-lg-6 col-sm-7 col-12  latest_offers_title">STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>

                    <div className="d-flex flex-column col-xl-3 latest_offers_box2">
                        <input className="col-xl-12 latest_offers_email_input" placeholder="Enter your email address" type="email"/>
                        <button className="col-xl-12 latest_offers_button">Subscribe to Newsletter</button>


                    </div>

                </div>
                        
            </div>

        </div>
    )

}
export default LatestOffers;