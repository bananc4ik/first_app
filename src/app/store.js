import { configureStore } from '@reduxjs/toolkit';
import reviewsReducer from '../app/reviewsSlice';
const store = configureStore({
    reducer: {
        reviews: reviewsReducer, 
    },
});

export default store;