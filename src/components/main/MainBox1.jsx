import React from "react";
import MainBox1Style from "./MainBox1.css";
import MainBox1_image from '../../images/MainImages/Rectangle 2.png';

const MainBox1 = () =>{
    return(

        <div className="container-fluid" style={{padding:'0px'}}>

            

            <div className="d-flex flex-row">



                <div className="MainBox1_1 col-lg-6">

                    <p className="MainBox1_title">FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</p>
                    <p className="col-lg-8 MainBox1_description">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>

                    <button className="MainBox1_button">Shop Now</button>

                    <div className="d-flex MainBox1_cards">

                        <div className="d-flex flex-column MainBox1_card">

                            <p className="MainBox1_card_title">200+</p>
                            <p className="MainBox1_card_description">International Brands</p>

                        </div>

                        <div className="d-flex flex-column MainBox1_card">

                            <p className="MainBox1_card_title">2,000+</p>
                            <p className="MainBox1_card_description">High-Quality Products</p>

                        </div>

                        <div className="d-flex flex-column MainBox1_card">

                            <p className="MainBox1_card_title">30,000+</p>
                            <p className="MainBox1_card_description">Happy Customers</p>

                        </div>

                        

                    </div>




                </div>




                <div className="d-flex justify-content-end col-lg-6 MainBox1_2" >
                    <img className="" src={MainBox1_image} alt="" />
                </div>




            </div>

            
            
                        
                   
        </div>
    )
}
export default MainBox1