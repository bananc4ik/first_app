import React from "react";
import CasualTypesClothing from '../../images/MainImages/CasualTypesClothing.svg';
import FormalTypesClothing from '../../images/MainImages/FormalTypesClothing.svg';
import PartylTypesClothing from '../../images/MainImages/PartyTypesClothing.svg';
import GymTypeClothing from '../../images/MainImages/GymTypesClothing.svg';

import  './TypesClothing.css';
const TypesClothing = () =>{
    return(
        <div className="container-fluid">

            <div className="row">

                <div className="d-flex flex-column justify-content-center align-items-center">
                    
                    <p className="type_clothing_title">BROWSE BY dress STYLE</p>

                    <div className="d-flex flex-xl-row flex-sm-column flex-column flex-wrap justify-content-evenly   col-12 types_clothing">
                                        

                        <img style={{paddingBottom: 20}} className="col-3" src={CasualTypesClothing} alt="TypeClothing" />

                        <img style={{paddingBottom: 20}}  className="col-5" src={FormalTypesClothing} alt="TypeClothing" />
                        
                        <img style={{paddingBottom: 76}} className="col-5" src={PartylTypesClothing} alt="TypeClothing" />
                        
                        <img style={{paddingBottom: 76}} className="col-3" src={GymTypeClothing} alt="TypeClothing" />


                    </div>




                </div>
                

                

                

            </div>

        </div>
        
    )
    
}

export default TypesClothing;