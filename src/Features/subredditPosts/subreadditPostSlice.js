import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/API";

const initialState = {
    posts: [],
    loading: false,
    error: false
}


export const fetchSubredditPosts = createAsyncThunk('SubredditPostsSlice/fetchSubredditPosts', async (subreddit) => {
    const response = await API.getSubredditPosts(subreddit);
    return response; 
})

const options = {
    name: 'subredditPosts',
    initialState: initialState,
    reducers: {
        clearSubredditPosts: state => {state.posts = []}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSubredditPosts.pending, (state, action) => {
            state.loading = true;
            state.error = false;
        })
        builder.addCase(fetchSubredditPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.loading = false;
            state.error = false;
        })
        builder.addCase(fetchSubredditPosts.rejected, (state, action) => {
            console.log('rejected')
            state.loading = false;
            state.error = true;
        })
    }

};

const subredditPostsSlice = createSlice(options);

export const selectSubredditPosts = state => state.subredditPosts.posts;

export default subredditPostsSlice.reducer;
export const { clearSubredditPosts } = subredditPostsSlice.actions;
