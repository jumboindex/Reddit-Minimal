import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/API";

const initialState = {
    post: {},
    comments:[],
    loading: true,
    error: false
}


export const fetchPostWithComments = createAsyncThunk('postWithCommentsSlice/fetchPostWithComments', async (subreddit, postID) => {
    const response = await API.getPostWithComments(subreddit, postID);
    return response; 
})

const options = {
    name: 'postWithCommentsSlice',
    initialState: initialState,
    reducers: {
        clearPost: state => {state.post = {}},
        clearComments: state => {state.comments = []}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPostWithComments.pending, (state, action) => {
            state.loading = true;
            state.error = false;
        })
        builder.addCase(fetchPostWithComments.fulfilled, (state, action) => {
            const postData = action.payload[0];
            const commentsData = action.payload[1];
            state.post = postData.data.children[0].data;
            state.comments = commentsData.data.children;
            state.loading = false;
            state.error = false;
        })
        builder.addCase(fetchPostWithComments.rejected, (state, action) => {
            console.log('rejected')
            state.loading = false;
            state.error = true;
        })
    }

};

const postWithCommentsSlice = createSlice(options);

export const selectPost = state => state.postWithComments.post;
export const selectComments = state => state.postWithComments.comments;
export const selectPostWithCommentsLoading = state => state.postWithComments.loading;
export const selectPostWithCommentsError = state => state.postWithComments.error;

export default postWithCommentsSlice.reducer;
export const { clearPost, clearComments } = postWithCommentsSlice.actions;
