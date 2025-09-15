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
    
    const [Subtotal,setSubtotal] = useState(0);





    const busketItems = localStorage.getItem("basketDetails")
    console.log(busketItems);

    useEffect(() => {
        setProductsBasket(JSON.parse(busketItems)); 
        
        setSubtotal(productsBasket.reduce((sum,product) => sum + product.price,0));

    }, [busketItems])

    useEffect(() => {
        dispatch(fetchProducts());

    }, [dispatch]);

    
    console.log(Subtotal);



    // useEffect(() => {
    //     if (busketItems != null) setProductsBasket(productsFromApi.filter(product => busketItems.includes(product.id)));

    // }, [productsFromApi]);

    // const DeleteProductFromBasket = () =>{

    // }


    // const a = 0
    // const plusAndMinusBusket = () => {
    //     a+=1

    //     setProductCount()

    // }







    return (

        <div className="container-fluid" >

            <Header />
            <Header2 />

            <div className="d-flex">




                <div className="col-6 basket_box">

                    <p className="col-12 basket_title">Your cart</p>

                    <div className="basket_products">

                        {productsBasket.map((product, index) => (

                            // <Link style={{ textDecoration: "none" }} className="col-lg-3 col-8" to={`/item_detail/${product.id}`}><ProductComponent key={product.id} product={product} /></Link>
                            <div className="basket_products_box col-12">

                                <ProductBasketComponent product={product} />
                                





                            </div>
                            
                        ))}
                    </div>


                </div>





                <div>

                </div>

                <div className="total_basket col-5">
                    <p className="total_baske_title">Order Summary</p>

                    <div className="total_baske_prices">
                        <div className="d-flex">
                            <p>Subtotal:</p>
                            <p>{Subtotal}</p>
                        </div>
                    </div>
                </div>

            </div>



        </div>

    )
}

export default Basket;