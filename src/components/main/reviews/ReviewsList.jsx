import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../../app/reviewsSlice";
import ReviewComponent from './ReviewComponent';
import ReviewsStyles from './ReviewsListStyles.css';


const ReviewsList = () =>{

    const dispatch = useDispatch();

    const reviewsFromApi = useSelector((state) => state.reviews.reviewsList);

    useEffect(() => {
        dispatch(fetchReviews());
    
    }, [dispatch]);
    

    useEffect(() => {
        console.log(reviewsFromApi);
        
    }, [reviewsFromApi]);


    
    
    

    return(
        <div className="container-fluid">
            
            <div className="row">

                <div>
                    
                    <p className="reviews_title">OUR HAPPY CUSTOMERS</p>
                    


                    

                    <div className="reviews_box d-flex flex-wrap">

                        {reviewsFromApi.map(element => (
                                <ReviewComponent key={element.id} review={element} />
                        ))}
                        
                    </div>



                    

                </div>

            </div>
            

        </div>
    )
}

export default ReviewsList;