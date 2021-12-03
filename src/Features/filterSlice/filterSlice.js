import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/API";

const initialState = {
    posts: [],
    loading: true,
    error: false
}


export const fetchFilteredPosts = createAsyncThunk('filterSlice/fetchFilteredPosts', async (filter) => {
    const response = await API.getFilteredSubreddits(filter);
    return response; 
})

const options = {
    name: 'filteredPosts',
    initialState: initialState,
    reducers: {
        clearPosts: state => {state.posts = []}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFilteredPosts.pending, (state, action) => {
            state.loading = true;
            state.error = false;
        })
        builder.addCase(fetchFilteredPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.loading = false;
            state.error = false;
        })
        builder.addCase(fetchFilteredPosts.rejected, (state, action) => {
            console.log('rejected')
            state.loading = false;
            state.error = true;
        })
    }

};

const filteredPostsSlice = createSlice(options);

export const selectFilteredPosts = state => state.filteredPosts.posts;
export const selectFilteredPostsLoading = state => state.filteredPosts.loading;
export const selectFilteredPostsError = state => state.filteredPosts.error;

export default filteredPostsSlice.reducer;
export const { clearPosts } = filteredPostsSlice.actions;
