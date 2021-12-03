import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/API";

const initialState = {
    posts: [],
    loading: true,
    error: false
}


export const fetchInitialPosts = createAsyncThunk('initialPostsSlice/fetchInitialPosts', async () => {
    const response = await API.getInitialPosts();
    return response; 
})

const options = {
    name: 'initialPostsSlice',
    initialState: initialState,
    reducers: {
        clearPosts: state => {state.posts = []}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchInitialPosts.pending, (state, action) => {
            state.loading = true;
            state.error = false;
        })
        builder.addCase(fetchInitialPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.loading = false;
            state.error = false;
        })
        builder.addCase(fetchInitialPosts.rejected, (state, action) => {
            console.log('rejected')
            state.loading = false;
            state.error = true;
        })
    }

};

const initialPostsSlice = createSlice(options);

export const selectInitialPosts = state => state.initialPosts.posts;
export const selectInitialPostsLoading = state => state.initialPosts.loading;
export const selectInitialPostsError = state => state.initialPosts.error;

export default initialPostsSlice.reducer;
export const { clearPosts } = initialPostsSlice.actions;
