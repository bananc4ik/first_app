import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";      
export const initialState = {
    productsList:[],
}

export const fetchProducts = createAsyncThunk("/shopco/products",async () =>{
    let productsResponse = await fetch("https://jjwjw.wiremockapi.cloud/shopco/products")
    return await productsResponse.json();
}) 

const getProducts = createSlice({
    name:"products",
    initialState,
    reducers:{},

    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled,(state,action) => {
            state.productsList = action.payload;
            console.log(state.productsList);
            
        });
    }
})

export default getProducts.reducer;