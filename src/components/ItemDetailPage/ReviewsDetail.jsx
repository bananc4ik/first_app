import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../app/reviewsSlice";
import ReviewComponent from '../main/reviews/ReviewComponent';
import Filter from "../../images/itemDetailPage/Filter.svg";
import FaqsStyle from "./Faqs.css";
import Arrow from "../../images/itemDetailPage/ArrovBottom.svg";
import IconVerify from '../../images/itemDetailPage/Icon.svg'


const ReviewDetail = ({ product }) => {




    const dispatch = useDispatch();

    const reviewsFromApi = useSelector((state) => state.reviews.reviewsList);



    const productsFromApi = useSelector((state) => state.products.productsList);




    console.log(reviewsFromApi);
    console.log(productsFromApi);


    let productReviews = reviewsFromApi.filter((review) => review.productId == product.id)
    console.log(productReviews);







    return (

        <div className="container-fluid">

            <div className="row">

                <div className="d-flex flex-column">

                    <div className="container-fluid">
                        <div className="row" style={{paddingTop:24}}>
                            <div className="d-flex justify-content-between switch_buttons">
                                <h2 className="Reviews_title">All Reviews</h2>

                                <div className="d-flex align-items-center ">
                                    <button className="filter_button">
                                        <img src={Filter} alt="" />
                                    </button>

                                    <div class="dropdown">
                                        <div class="dropbtn">
                                            <button>Menu</button>
                                            <img src={Arrow} alt="" />
                                        </div>

                                        <div class="dropdown-content">
                                            <p>Link 1</p>
                                            <p>Link 2</p>
                                            <p>Link 3</p>
                                        </div>
                                    </div>

                                    <button className="write_review_button">Write a Review</button>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 d-flex flex-md-row flex-sm-column ProductReviews">
                            {productReviews.map((review) => {
                                return (
                                    <div className="d-flex flex-wrap flex-lg-row flex-column col-md-6 col-sm-12  review_detail_box">

                                        <div>
                                            <p>{"⭐️".repeat(review.rating)}</p>
                                            <div className="d-flex">
                                                <p className="review_detail_name">{review.user}</p>
                                                <img src={IconVerify} alt="" />
                                            </div>

                                            <p className="review_dateil_component">{review.comment}</p>
                                        </div>

                                        <p className="review_dateil_date">{review.date}</p>

                                    </div>


                                )

                            })}

                        </div>



                        <div className="col-12 d-flex justify-content-center">

                            <button className="load_more_reviews">Load More Reviews</button>

                        </div>


                    </div>








                </div>


            </div>






                            
        </div>


    )
}


export default ReviewDetail