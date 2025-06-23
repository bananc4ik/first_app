import React from "react";
import CasualTypesClothing from '../../images/MainImages/CasualTypesClothing.svg';
import FormalTypesClothing from '../../images/MainImages/FormalTypesClothing.svg';
import PartylTypesClothing from '../../images/MainImages/PartyTypesClothing.svg';
import GymTypeClothing from '../../images/MainImages/GymTypesClothing.svg';

import CasualTypesClothingMobile from '../../images/MainImages/CasualTypesClothingMobile.svg';
import FormalTypesClothingMobile from '../../images/MainImages/FormalTypesClothingMobile.svg';
import PartylTypesClothingMobile from '../../images/MainImages/PartyTypesClothingMobile.svg';
import GymTypeClothingMobile from '../../images/MainImages/GymTypesClothingMobile.svg';
import { Link } from "react-router-dom";


import  './TypesClothing.css';
const TypesClothing = () =>{
    return(
        <div className="container-fluid type_clothing_box">

            <div className="row">

                <div className="d-flex flex-column justify-content-center align-items-center">
                    
                    <p className="col-lg-8 col-sm-7 type_clothing_title">BROWSE BY DRESS STYLE</p>

                    <div className="d-flex flex-lg-row flex-sm-column flex-column flex-wrap justify-content-lg-evenly align-items-center col-12 types_clothing">
                                        

                        <Link to={'/product_filter'}><img  style={{paddingBottom: 20}} className="d-lg-block d-sm-none d-none col-lg-3" src={CasualTypesClothing} alt="TypeClothing" /></Link> 

                        <img style={{paddingBottom: 20}}  className="col-lg-5 d-lg-block d-sm-none  d-none col-lg-3" src={FormalTypesClothing} alt="TypeClothing" />
                        
                        <img style={{paddingBottom: 76}} className="col-lg-5 d-lg-block d-sm-none d-none col-lg-3" src={PartylTypesClothing} alt="TypeClothing" />
                        
                        <img style={{paddingBottom: 76}} className="col-lg-3  d-lg-block d-sm-none d-none col-lg-3 " src={GymTypeClothing} alt="TypeClothing" />

                        {/* телефон */}

                        <img style={{paddingBottom: 20}} className="col-8 d-lg-none d-sm-block" src={CasualTypesClothingMobile} alt="CasualTypesClothing" />

                        <img style={{paddingBottom: 20}} className="col-8 d-lg-none d-sm-block" src={FormalTypesClothingMobile} alt="CasualTypesClothing" />

                        <img style={{paddingBottom: 20}} className="col-8 d-lg-none d-sm-block" src={PartylTypesClothingMobile} alt="CasualTypesClothing" />

                        <img style={{paddingBottom: 20}} className="col-8 d-lg-none d-sm-block" src={GymTypeClothingMobile} alt="CasualTypesClothing" />


                    </div>




                </div>
                

                

                

            </div>

        </div>
        
    )
    
}

export default TypesClothing;