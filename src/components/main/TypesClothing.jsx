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
                                        

                        <Link className="col-lg-5 d-lg-block d-sm-none d-none"  to={'/product_filter'}><img  style={{paddingBottom: 20}} className="col-9" src={CasualTypesClothing} alt="TypeClothing" /></Link> 

                        <Link className="col-lg-5 d-lg-block d-sm-none d-none"  to={'/product_filter'}><img style={{paddingBottom: 20}}  className="col-9" src={FormalTypesClothing} alt="TypeClothing" /></Link>
                        
                        <Link className="col-lg-5 d-lg-block d-sm-none d-none"  to={'/product_filter'}><img style={{paddingBottom: 76}} className="col-9" src={PartylTypesClothing} alt="TypeClothing" /></Link>
                        
                        <Link className="col-lg-5 d-lg-block d-sm-none d-none"  to={'/product_filter'}><img style={{paddingBottom: 76}} className="col-9" src={GymTypeClothing} alt="TypeClothing" /></Link>

                        {/* телефон */}

                        <Link className="col-8 d-lg-none d-sm-block" to={'/product_filter'}><img style={{paddingBottom: 20}} className="col-12"  src={CasualTypesClothing} /></Link>

                        <Link className="col-8 d-lg-none d-sm-block" to={'/product_filter'}><img style={{paddingBottom: 20}} className="col-12" src={FormalTypesClothingMobile} alt="CasualTypesClothing" /></Link>

                        <Link className="col-8 d-lg-none d-sm-block" to={'/product_filter'}><img style={{paddingBottom: 20}} className="col-12" src={PartylTypesClothingMobile} alt="CasualTypesClothing" /></Link>

                        <Link className="col-8 d-lg-none d-sm-block" to={'/product_filter'}><img style={{paddingBottom: 20}} className="col-12" src={GymTypeClothingMobile} alt="CasualTypesClothing" /></Link>


                    </div>




                </div>
                

                

                

            </div>

        </div>
        
    )
    
}

export default TypesClothing;