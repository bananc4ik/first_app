import react,{useEffect}  from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../app/productSlice";
import ProductComponent from './ProductComponent';
import ProductsListStyles from './ProductsList.css';
const ProductsListTopSelling = () =>{

    const dispatch = useDispatch();

    const productsFromApi = useSelector((state) => state.products.productsList);

    useEffect(() => {
            dispatch(fetchProducts());
    
        }, [dispatch]);


    return(

        <div className="col-12 d-flex flex-column justify-content-center">

            <p className=" text-center newarrivals">TOP SELLING</p>

            <div className="d-flex container-fluid  align-items-center justify-content-center">
            
            {productsFromApi.slice(5,9).map((product) => (
                                
                <ProductComponent  key={product.id }product={product} />
                                
            ))}

            </div>

            <button className="col-2 view_all">View All</button>

            

        </div>        
        
    )
}

export default ProductsListTopSelling;