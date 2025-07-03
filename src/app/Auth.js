import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState = {
    authList:[], 
}

export const fetchAuth = createAsyncThunk("/shopco/auth",async () =>{

    let authresponse = await fetch("https://jjwjw.wiremockapi.cloud/shopco/auth")
    return await authresponse.json();

})

const getAuth = createSlice({
    name:"auth",
    initialState,
    reducers:{},

    extraReducers:(builder) =>{
        builder.addCase(fetchAuth.fulfilled,(state,action) =>{
            state.authList = action.payload;
            console.log(state.authList);
            
        })
    }
})

export default getAuth.reducer;