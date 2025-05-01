import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../../app/reviewsSlice";
import ReviewComponent from './ReviewComponent'



const ReviewsComponent = () =>{

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
                    
                    <p></p>


                    <div className="reviews_box " style={{height: 200}}>

                        {reviewsFromApi.forEach(element => {
                            <ReviewComponent key={element.id} review={element}/> 
                        
                        })}
                        






                    </div>

                </div>

            </div>
            

        </div>
    )
}

export default ReviewsComponent;