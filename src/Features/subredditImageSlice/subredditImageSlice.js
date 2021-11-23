import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/API";

const initialState = {
    subredditImages:{},
    loading: false,
    error: false
}

export const fetchSubredditImage = createAsyncThunk('subredditSlice/FetchSubredditImage', async (subreddit) => {
    const response = await API.getSubreddit(subreddit);
    const subredditName = response.display_name_prefixed;
    const subredditIcon = response.icon_img;
    let shouldLoad;
    
    if (subredditIcon === '' || subredditIcon === null) shouldLoad = false;
    else shouldLoad = true;
    
    const payload = { subredditName, subredditIcon, shouldLoad };
    return payload;
})

const options = {
    name:'subredditsImageSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSubredditImage.pending, (state, action) => {
            state.loading = true;
            state.error = false;
        })
        builder.addCase(fetchSubredditImage.fulfilled, (state, action) => {                
            state.subredditImages[action.payload.subredditName] = action.payload;
            state.loading = false;
            state.error = false;
        })
        builder.addCase(fetchSubredditImage.rejected, (state, action) => {
            console.log('rejected')
            state.loading = false;
            state.error = true;
        })
    }
}


const subredditImageSlice = createSlice(options);

export default subredditImageSlice.reducer;