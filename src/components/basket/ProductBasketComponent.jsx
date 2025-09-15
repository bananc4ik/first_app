import react from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../app/productSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BusketDeleteFrom from "../../images/Basket/basket_delete.svg"
import { useState } from "react";




const ProductBasketComponent = ({ product, onUpdateCount, onDelete }) => {



    return (
        <div className="container-fluid">

            <div className="row">
                <div className="col-2">
                    <Link to={`/item_detail/${product.id}`}><img className="col-12" src={product.image} alt="" /></Link>
                </div>

                <div className="col-10 justify-content-between">

                    <div className="col-12 d-flex align-items-center justify-content-between ">
                        <p className="basket_product_name">{product.name}</p>
                        <div className="col-1">
                            <button className="busket_buton" onClick={() => onDelete(product.id)}><img className="col-12 basket_product_delete_product" src={BusketDeleteFrom} alt="" /></button>
                        </div>


                    </div>


                    <p>Size:{product.size}</p>

                    <p>color</p>

                    <div className="d-flex align-items-center justify-content-between">

                        {product.discount > 0 ? (

                            <p className="basket_product_price">{((((product.price * product.discount) / 100) * product.count).toFixed(2)) + "₽"}</p>

                        ) : (

                            <p className="basket_product_price">{(product.price * product.count).toFixed(2)}</p>
                        )}

                        <div className="d-flex productBasketdelete">
                            <button
                                className="productBasketdeleteMinusPlus"
                                onClick={() => onUpdateCount(product.id, (product.count || 1) - 1)}
                            >
                                -
                            </button>
                            <p>{product.count || 1}</p>
                            <button
                                className="productBasketdeleteMinusPlus"
                                onClick={() => onUpdateCount(product.id, (product.count || 1) + 1)}
                            >
                                +
                            </button>
                        </div>

                    </div>






                </div>

            </div>


        </div>
    )
}

export default ProductBasketComponent;