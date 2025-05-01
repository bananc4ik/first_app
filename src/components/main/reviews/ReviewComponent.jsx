import react from "react";
import ReviewComponentStyles from './ReviewComponent.css'
import ReviewsUserVerivied from './Frame.svg';

const ReviewComponent = ({review}) =>{
    return(

        <div>

            <div className="revives_rating">

                <p>{"⭐️".repeat(review.rating)}</p>
  
            </div> 

            <div className="user_name">
                <p>{review.user}</p>
                <img src={ReviewsUserVerivied} alt="" />   
            </div>

            <div className="reviews_description">

                {review.comment}

            </div>           

        </div>
    )   
}


export default ReviewComponent;