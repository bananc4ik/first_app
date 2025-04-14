import React from "react";
import CasualTypesClothing from '../../images/MainImages/CasualTypesClothing.svg';
import FormalTypesClothing from '../../images/MainImages/FormalTypesClothing.svg';
import PartylTypesClothing from '../../images/MainImages/PartyTypesClothing.svg';
import GymTypeClothing from '../../images/MainImages/GymTypesClothing.svg';

import CasualTypesClothingMobile from '../../images/MainImages/CasualTypesClothingMobile.svg';
import FormalTypesClothingMobile from '../../images/MainImages/FormalTypesClothingMobile.svg';
import PartylTypesClothingMobile from '../../images/MainImages/PartyTypesClothingMobile.svg';
import GymTypeClothingMobile from '../../images/MainImages/GymTypesClothingMobile.svg';


import  './TypesClothing.css';
const TypesClothing = () =>{
    return(
        <div className="container-fluid">

            <div className="row">

                <div className="d-flex flex-column justify-content-center align-items-center">
                    
                    <p className="col-xl-8 col-sm-7 type_clothing_title">BROWSE BY DRESS STYLE</p>

                    <div className="d-flex flex-xl-row flex-sm-column flex-column flex-wrap justify-content-xl-evenly align-items-center col-12 types_clothing">
                                        

                        <img style={{paddingBottom: 20}} className="d-xl-block d-sm-none d-none col-xl-3" src={CasualTypesClothing} alt="TypeClothing" />

                        <img style={{paddingBottom: 20}}  className="col-xl-5 d-xl-block d-sm-none  d-none col-xl-3" src={FormalTypesClothing} alt="TypeClothing" />
                        
                        <img style={{paddingBottom: 76}} className="col-xl-5 d-xl-block d-sm-none d-none col-xl-3" src={PartylTypesClothing} alt="TypeClothing" />
                        
                        <img style={{paddingBottom: 76}} className="col-xl-3  d-xl-block d-sm-none d-none col-xl-3 " src={GymTypeClothing} alt="TypeClothing" />

                        {/* телефон */}

                        <img style={{paddingBottom: 20}} className="col-8 d-xl-none d-sm-block" src={CasualTypesClothingMobile} alt="CasualTypesClothing" />

                        <img style={{paddingBottom: 20}} className="col-8 d-xl-none d-sm-block" src={FormalTypesClothingMobile} alt="CasualTypesClothing" />

                        <img style={{paddingBottom: 20}} className="col-8 d-xl-none d-sm-block" src={PartylTypesClothingMobile} alt="CasualTypesClothing" />

                        <img style={{paddingBottom: 20}} className="col-8 d-xl-none d-sm-block" src={GymTypeClothingMobile} alt="CasualTypesClothing" />


                    </div>




                </div>
                

                

                

            </div>

        </div>
        
    )
    
}

export default TypesClothing;