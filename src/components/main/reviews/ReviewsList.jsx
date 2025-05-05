import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../../app/reviewsSlice";
import ReviewComponent from './ReviewComponent';
import ReviewsStyles from './ReviewsListStyles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

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

                <div>

                    <p className="reviews_title">OUR HAPPY CUSTOMERS</p>





                    <div className="reviews_box d-flex flex-wrap">

                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation
                            pagination={{ clickable: true }}
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