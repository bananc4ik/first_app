import react,{useEffect}  from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../app/productSlice";


const ProductsList = () =>{

    const dispatch = useDispatch();

    const productsFromApi = useSelector((state) => state.products.productsList);

    useEffect(() => {
            dispatch(fetchProducts());
    
        }, [dispatch]);


    return(
        <div>

        </div>
    )
}

export default ProductsList;