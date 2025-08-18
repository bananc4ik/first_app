import react from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../app/productSlice";
import { useEffect } from "react";




const ProductBasketComponent = () =>{

    const dispatch = useDispatch();
    const productsFromApi = useSelector((state) => state.products.productsList);

    const busketItems = localStorage.getItem("productIds")
    console.log(busketItems);
    
    return(
        <div>

            <p>Hello</p>



        </div>
    )
}

export default ProductBasketComponent;