import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/API";

const initialState = {
    posts: [],
    loading: false,
    error: false
}


export const fetchInitialPosts = createAsyncThunk('initialPostsSlice/fetchInitialPosts', async () => {
    const response = await API.getInitialPosts();
    console.log(response);
    return response; 
})

const options = {
    name: 'initialPostsSlice',
    initialState: initialState,
    reducers: {
        clearPosts: state => state.posts = []
    },
    extraReducers: (builder) => {
        builder.addCase(fetchInitialPosts.pending, (state, action) => {
            console.log('pending')
            state.loading = true;
            state.error = false;
        })
        builder.addCase(fetchInitialPosts.fulfilled, (state, action) => {
            
            console.log(action.payload);  
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

export default initialPostsSlice.reducer;
export const { clearPosts } = initialPostsSlice.actions;
