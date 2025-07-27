import react, { useState } from "react";
import Header from "../components/header/Header";
import Header2 from "../components/header/Header2";
import BasketStyle from '../styles/basket.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../app/productSlice";
import { useEffect } from "react";
import ProductComponent from "../components/main/products/ProductComponent";
import { Link } from "react-router-dom"



const Basket = () => {

    const dispatch = useDispatch();

    const productsFromApi = useSelector((state) => state.products.productsList);

    
  const [productsBasket, setProductsBasket] = useState([]);



    const busketItems = localStorage.getItem("productIds")
    console.log(busketItems);

    useEffect(() => {
        dispatch(fetchProducts());

    }, [dispatch]);

    useEffect(() => {
        if (busketItems != null) setProductsBasket(productsFromApi.filter(product => busketItems.includes(product.id)));

    }, [productsFromApi]);







    return (

        <div className="container-fluid" >

            <Header />
            <Header2 />

            <div className="row">




                <div className="basket_box">

                    <p className="basket_title">Your cart</p>

                    <div className="basket_products">

                        {productsBasket.map((product) => (

                            <Link style={{ textDecoration: "none" }} className="col-lg-3 col-8" to={`/item_detail/${product.id}`}><ProductComponent key={product.id} product={product} /></Link>

                        ))}
                    </div>

                    <div className="basket_options">



                    </div>

                </div>

            </div>

        </div>

    )
}

export default Basket;