import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../../app/reviewsSlice";
import ReviewComponent from './ReviewComponent';
import ReviewsStyles from './ReviewsListStyles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import reviewsImageLeft from '../../../images/MainImages/arrow-down-bold 2.svg';
import reviewsImageRight from '../../../images/MainImages/arrow-down-bold 1.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ReviewsList = () => {

    const dispatch = useDispatch();

    const reviewsFromApi = useSelector((state) => state.reviews.reviewsList);

    useEffect(() => {
        dispatch(fetchReviews());

    }, [dispatch]);


    useEffect(() => {
        console.log(reviewsFromApi);

    }, [reviewsFromApi]);






    return (
        <div className="container-fluid">

            <div className="row">

                <div >

                    <p className="reviews_title">OUR HAPPY CUSTOMERS</p>

                    <div className="d-flex justify-content-end ">

                        <div>

                            <button className="swiper_button_prev reviews_button"><img src={reviewsImageLeft} alt="" /></button>
                            <button className="swiper_button_next reviews_button"><img src={reviewsImageRight} alt="" /></button>

                        </div>



                    </div>





                    <div className="reviews_box d-flex flex-wrap">

                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: '.swiper_button_next',
                                prevEl: '.swiper_button_prev',
                            }}

                            spaceBetween={20}
                            slidesPerView={3}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 }
                            }}
                        >
                            {reviewsFromApi.map((review) => (
                                <SwiperSlide key={review.id} className="d-flex justify-content-center">
                                    <ReviewComponent review={review} />
                                </SwiperSlide>
                            ))}
                        </Swiper>


                    </div>





                </div>

            </div>


        </div>
    )
}

export default ReviewsList;