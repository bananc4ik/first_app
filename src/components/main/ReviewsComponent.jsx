import react from "react";
import { useDispatch } from "react-redux";
import {fetchReviews} from '../../app/reviewsSlice'
import reviewsList from '../../app/reviewsSlice';


const ReviewsComponent = () =>{

    const dispatch = useDispatch();

    let a = dispatch(fetchReviews())

    console.log(a);
    
    
    
    

    
    


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