import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/API";

const initialState = {
    userDetails:{},
    loading: false,
    error: false
}

export const fetchUserDetails = createAsyncThunk('userDetailsSlice/FetchUserDetails', async (userName) => {
    const response = await API.getUserDetails(userName);
    const userIcon = response.icon_img;
    let shouldLoad;
    
    if (userIcon === '' || userIcon === null) shouldLoad = false;
    else shouldLoad = true;
    
    const payload = { userName, userIcon, shouldLoad };
    return payload;
})

const options = {
    name:'userDetailsSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserDetails.pending, (state, action) => {
            state.loading = true;
            state.error = false;
        })
        builder.addCase(fetchUserDetails.fulfilled, (state, action) => {                
            state.userDetails[action.payload.userName] = action.payload;
            state.loading = false;
            state.error = false;
        })
        builder.addCase(fetchUserDetails.rejected, (state, action) => {
            console.log('rejected')
            state.loading = false;
            state.error = true;
        })
    }
}


const userDetailsSlice = createSlice(options);

export default userDetailsSlice.reducer;