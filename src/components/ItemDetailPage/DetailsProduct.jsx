import react from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../app/productSlice";
import DetailsProductStyle from "./DetailsProduct.css"

const DetailsProduct = ({product}) => {





    return (
        <div className="container-fluid">
            <div className="row">

                <div className="d-flex align-items-end  gap-3">
                    <p className="details_name">name:</p>
                    <h3 className="">{product.name}</h3>
                    
                </div>



            </div>
        </div>



    )
}


export default DetailsProduct;