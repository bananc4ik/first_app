import React from "react";
import MainBox1Style from "./MainBox1.css";
import MainBox1_image from '../../images/MainImages/Rectangle 2(1).svg';
import Versace from '../../images/MainImages/Group.svg';
import ZaraLogo from '../../images/MainImages/zara-logo-1 1.svg';
import GucciLogo from '../../images/MainImages/gucci-logo-1 1.svg';
import PradaLogo from '../../images/MainImages/prada-logo-1 1.svg';
import CalvinLogo from '../../images/MainImages/Group(1).svg';
const MainBox1 = () =>{
    return(

        <div id="Main_box1_container" className="container-fluid" style={{padding:'0px'}}>

            

            <div className="d-flex flex-column flex-xl-row flex-sm-column ">



                <div className="d-flex flex-column  MainBox1_1 ps-xl-5 ps-lg-2 col-xl-6 col-lg-12">

                    <p className="col-lg-9 MainBox1_title">FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</p>
                    <p className="col-lg-5 MainBox1_description">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <div className="d-flex justify-content-center col-xl-5 col-xs-10">
                        <button className="col-12 MainBox1_button">Shop Now</button>
                    </div>
                    

                    <div className="d-flex content-left justify-content-center justify-content-xl-start justify-content-sm-center align-items-center ms-xl-0 ms-sm-5 flex-row flex-wrap  MainBox1_cards">

                        <div className=" col-xl-2 col-sm-6 d-flex flex-column  MainBox1_card">

                            <p className="MainBox1_card_title">200+</p>
                            <p className="MainBox1_card_description">International Brands</p>

                        </div>

                        <div className="col-xl-2 col-sm-3  d-flex flex-column MainBox1_card">

                            <p className="MainBox1_card_title ">2,000+</p>
                            <p className="MainBox1_card_description">High-Quality Products</p>

                        </div>

                        <div className="col-xl-2 col-sm-3 d-flex flex-column MainBox1_card">

                            <p className="MainBox1_card_title">30,000+</p>
                            <p className="MainBox1_card_description">Happy Customers</p>

                        </div>

                    </div>

                        
                </div>
                    



                <div className="d-flex align-items-end col-xl-6 col-lg-12 col-sm-12 col-sm-12 justify-content-lg-end  MainBox1_2 " >
                    <img className="col-12 col-xl-12 col-sm-12" src={MainBox1_image} alt="" />
                </div>
                    
                
                




            </div>

            
            
            <div className="d-flex align-items-center justify-content-around flex-wrap Brands">
                <img className="col-xl-1 col-sm-4" src={Versace} alt="Brand_LOGO" />
                <img className="col-xl-1 col-sm-3" src={ZaraLogo} alt="Brand_LOGO" />
                <img className="col-xl-1 col-sm-3" src={GucciLogo} alt="Brand_LOGO" />
                <img className="col-xl-1 col-sm-3" src={PradaLogo} alt="Brand_LOGO" />
                <img className="col-xl-1 col-sm-3" src={CalvinLogo} alt="Brand_LOGO" />
                
            </div>   

    </div>            
                   
       
    )
}

export default MainBox1