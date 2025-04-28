import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const initialState = {
    reviewsList:[],
}

export const fetchReviews = createAsyncThunk("/shopco/reviews", async () =>{
    
    let reviewsResponse = await fetch("https://jjwjw.wiremockapi.cloud/shopco/reviews"); 
    reviewsResponse = await reviewsResponse.json();
    console.log(reviewsResponse);
    
    return await reviewsResponse.json()
    
    
     
})

const getReviews = createSlice({
    name: "reviews",
    initialState,
    reducers:{},
    
    extraReducers:(builder) =>{
        builder.addCase(fetchReviews.fulfilled,(state,action) => {
            state.reviewsList = action.payload
        })
    } 


})

export default getReviews.extraReducers;