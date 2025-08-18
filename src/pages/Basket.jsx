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



const Basket = () => {

    const dispatch = useDispatch();

    const productsFromApi = useSelector((state) => state.products.productsList);

    
     const [productsBasket, setProductsBasket] = useState([]);



    const busketItems = localStorage.getItem("basket")
    console.log(busketItems);

    useEffect(() => {
        dispatch(fetchProducts());

    }, [dispatch]);

    // useEffect(() => {
    //     if (busketItems != null) setProductsBasket(productsFromApi.filter(product => busketItems.includes(product.id)));
     
    // }, [productsFromApi]);







    return (

        <div className="container-fluid" >

            <Header />
            <Header2 />

            <div className="row">




                <div className="col-12 basket_box">

                    <p className="col-3 basket_title">Your cart</p>

                    <div className="basket_products">

                        {productsBasket.map((product) => (

                            // <Link style={{ textDecoration: "none" }} className="col-lg-3 col-8" to={`/item_detail/${product.id}`}><ProductComponent key={product.id} product={product} /></Link>
                            <div className="col-7">

                                <div>
                                    <img className="col-2" src={product.image} alt="" />
                                </div>

                                <div>
                                    <p>{product.name}</p>
                                    <p>Size:product.id.</p>
                                </div>

                            </div>
                        ))}
                    </div>


                </div>

                <ProductBasketComponent/>



                <div>

                </div>

            </div>

        </div>

    )
}

export default Basket;