import react from "react";
import ReviewComponentStyles from './ReviewStyles.css';
import ReviewsUserVerivied from './Frame.svg';


const ReviewComponent = ({review}) =>{
    return(

        <div className=" d-flex flex-column review_box col-12 d-flex justify-content-center ">

            <div>

                <div className="revives_rating">

                    <p>{"⭐️".repeat(review.rating)}</p>
  
                </div> 


            
            </div>





            <div className="d-flex flex-column review_box2">


                <div className="user_name d-flex">
                    <p>{review.user}</p>
                    <img src={ReviewsUserVerivied} alt="" />   
                </div>
                
                

                

                <div className="reviews_description">

                    {review.comment}

                </div>

            </div>


                       

        </div>
    )   
}


export default ReviewComponent;