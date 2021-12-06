import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/API";

const initialState = {
    subreddits: {},
    loading: true,
    error: false
}

export const fetchSubreddit = createAsyncThunk('subredditSlice/FetchSubreddit', async (subreddit) => {
    const response = await API.getSubreddit(subreddit);
    return response;
})

const options = {
    name:'subredditsSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSubreddit.pending, (state, action) => {
            state.loading = true;
            state.error = false;
        })
        builder.addCase(fetchSubreddit.fulfilled, (state, action) => {
            const subredditName = action.payload.display_name_prefixed;
            state.subreddits[subredditName] = action.payload;
            state.loading = false;
            state.error = false;
        })
        builder.addCase(fetchSubreddit.rejected, (state, action) => {
            console.log('rejected')
            state.loading = false;
            state.error = true;
        })
    }
}

export const selectSubredditSliceLoading = state => state.subreddits.loading;
export const selectSubredditSliceError = state => state.subreddits.error;

const subredditSlice = createSlice(options);

export default subredditSlice.reducer;