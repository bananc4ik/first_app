import { configureStore } from '@reduxjs/toolkit';
import reviewsReducer from '../app/reviewsSlice';
import productsReducer from '../app/productSlice';
const store = configureStore({
    reducer: {
        reviews: reviewsReducer,
        products:productsReducer,
        
    },
});

export default store;