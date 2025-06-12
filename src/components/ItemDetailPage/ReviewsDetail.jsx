import react from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../app/reviewsSlice";
import ReviewComponent from '../main/reviews/ReviewComponent';



const ReviewDetail = ({product}) => {

    const dispatch = useDispatch();

    const reviewsFromApi = useSelector((state) => state.reviews.reviewsList);

    const productsFromApi = useSelector((state) => state.products.productsList);

    console.log(reviewsFromApi);
    console.log(productsFromApi);


    let productReviews = reviewsFromApi.filter((review) => review.productId == product.id)
    console.log(productReviews);
    
    
    


    return(

        <div className="container-fluid">

            <div className="row">

                <div className="d-flex">

                    <div>
                        <p>{"⭐️".repeat(product.rating)}</p>
                    </div>
                    <div></div>


                </div>


            </div>



        </div>


    )
}


export default ReviewDetail