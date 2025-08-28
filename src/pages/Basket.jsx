import react, { useState } from "react";
import Header from "../components/header/Header";
import Header2 from "../components/header/Header2";
import BasketStyle from '../styles/basket.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../app/productSlice";
import { useEffect } from "react";
import ProductComponent from "../components/main/products/ProductComponent";
import { Link } from "react-router-dom"
import ProductBasketComponent from "../components/basket/ProductBasketComponent";
import BusketDeleteFrom from "../images/Basket/basket_delete.svg"



const Basket = () => {

    const dispatch = useDispatch();

    const productsFromApi = useSelector((state) => state.products.productsList);


    const [productsBasket, setProductsBasket] = useState([]);



    const busketItems = localStorage.getItem("basketDetails")
    console.log(busketItems);

    useEffect(() => {
        setProductsBasket(JSON.parse(busketItems));
    }, [busketItems])

    useEffect(() => {
        dispatch(fetchProducts());

    }, [dispatch]);

    // useEffect(() => {
    //     if (busketItems != null) setProductsBasket(productsFromApi.filter(product => busketItems.includes(product.id)));

    // }, [productsFromApi]);

    // const DeleteProductFromBasket = () =>{
        
    // }







    return (

        <div className="container-fluid" >

            <Header />
            <Header2 />

            <div className="row">




                <div className="col-12 basket_box">

                    <p className="col-3 basket_title">Your cart</p>

                    <div className="basket_products">

                        {productsBasket.map((product, index) => (

                            // <Link style={{ textDecoration: "none" }} className="col-lg-3 col-8" to={`/item_detail/${product.id}`}><ProductComponent key={product.id} product={product} /></Link>
                            <div className="basket_products_box col-7">



                                <div className="col-12 d-flex" key={index}>
                                    <div className="col-2">
                                        <Link to={`/item_detail/${product.id}`}><img className="col-12" src={product.image} alt="" /></Link>
                                    </div>

                                    <div className="col-10 justify-content-between">

                                        <div className="col-12 d-flex align-items-center justify-content-between ">
                                            <p className="basket_product_name">{product.name}</p>
                                            <div className="col-1">
                                                <button onClick={() => localStorage.removeItem("basketDetails",product.id)}><img className="col-3 basket_product_delete_product" src={BusketDeleteFrom} alt="" /></button>
                                            </div>


                                        </div>


                                        <p>Size:{product.size}</p>

                                        <p>color</p>

                                        <div>

                                            {product.discount > 0 ? (

                                                <p className="basket_product_price">{((product.price * product.discount) / 100).toFixed(2) + "$"}</p>

                                            ) : (

                                                <p className="basket_product_price">{(product.price).toFixed(1) + "₽"}</p>
                                            )}

                                        </div>






                                    </div>




                                </div>
                                <hr className="col-12" />


                            </div>
                        ))}
                    </div>


                </div>

                <ProductBasketComponent />



                <div>

                </div>

            </div>

        </div>

    )
}

export default Basket;