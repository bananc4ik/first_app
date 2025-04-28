import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../../app/reviewsSlice";




const ReviewsComponent = () =>{

    const dispatch = useDispatch();

    const reviewsFromApi = useSelector((state) => state.reviews.reviewsList);

    useEffect(() => {
        dispatch(fetchReviews());
        console.log(reviewsFromApi);
        
    }, [dispatch]);
    

    

    
    


    return(
        <div className="container-fluid">
            
            <div className="row">

                <div>

                    <div className="review">

                    </div>

                </div>

            </div>
            

        </div>
    )
}

export default ReviewsComponent;