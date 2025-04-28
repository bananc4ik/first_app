import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../../app/reviewsSlice";




const ReviewsComponent = () =>{

    const dispatch = useDispatch();

    const reviews = useSelector((state) => state.reviews.reviewsList);

    useEffect(() => {
        dispatch(fetchReviews());
    }, [dispatch]);
    
    
    console.log(reviews);
    
    

    
    


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