import { configureStore } from '@reduxjs/toolkit';
import reviewsReducer from '../app/reviewsSlice';
import productsReducer from '../app/productSlice';
import authReducers from '../app/Auth';
const store = configureStore({
    reducer: {
        reviews: reviewsReducer,
        products:productsReducer,
        auth:authReducers,
        
        
    },
});

export default store;