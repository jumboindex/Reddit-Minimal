import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/API";

const initialState = {
    featuredSubreddits: [],
    loading: true,
    error: false
}

export const fetchFeaturedSubreddits = createAsyncThunk('featuredSubredditSlice/FetchFeaturedSubreddits', async () => {
    const response = await API.getFeaturedSubreddits();
    return response;
})

const options = {
    name:'featuredSubredditsSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFeaturedSubreddits.pending, (state, action) => {
            state.loading = true;
            state.error = false;
        })
        builder.addCase(fetchFeaturedSubreddits.fulfilled, (state, action) => {
            state.featuredSubreddits = action.payload
            state.loading = false;
            state.error = false;
        })
        builder.addCase(fetchFeaturedSubreddits.rejected, (state, action) => {
            console.log('rejected')
            state.loading = false;
            state.error = true;
        })
    }
}

export const selectFeaturedSubreddits = state => state.featuredSubreddits.featuredSubreddits;

const featuredSubredditSlice = createSlice(options);

export default featuredSubredditSlice.reducer;           