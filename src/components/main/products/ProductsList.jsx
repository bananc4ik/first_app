import react,{useEffect}  from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../app/productSlice";
import ProductComponent from './ProductComponent';
import ProductsListStyles from './ProductsList.css';
import {Link} from "react-router-dom"
const ProductsList = () =>{

    const dispatch = useDispatch();

    const productsFromApi = useSelector((state) => state.products.productsList);

    

    useEffect(() => {
            dispatch(fetchProducts());
    
        }, [dispatch]);


    return(

        <div className="d-flex flex-column justify-content-center">

            <p className=" text-center newarrivals">NEW ARRIVALS</p>

            <div className="d-flex flex-lg-row gap-lg-0 gap-3 flex-column container-fluid  align-items-center justify-content-center">
            
            {productsFromApi.slice(0,4).map((product) => (
                                
                <Link style={{textDecoration:"none"}} className="col-lg-3 col-8"   to={`/item_detail/${product.id}`}><ProductComponent  key={product.id }product={product} /></Link>
                                
            ))}

            </div>

            <button className="col-2 view_all">View All</button>

            <hr />

        </div>        
        
    )
}

export default ProductsList;

