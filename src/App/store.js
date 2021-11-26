import { configureStore } from "@reduxjs/toolkit";
import initialPostsReducer from "../Features/initialPostsSlice/initialPostsSlice";
import subredditImageSliceReducer from "../Features/subredditImageSlice/subredditImageSlice";
import subredditSliceReducer from "../Features/subredditSlice/subredditSlice";
import featuredSubredditSliceReducer from "../Features/featuredSubredditSlice/featuredSubredditSlice";
import filteredPostsSliceReducer from "../Features/filterSlice/filterSlice";
import postWithCommentsReducer from "../Features/postWithCommentsSlice/postWithCommentsSlice";

const store = configureStore({
    reducer: {
        initialPosts: initialPostsReducer,
        subreddits: subredditSliceReducer,
        subredditImages: subredditImageSliceReducer,
        featuredSubreddits: featuredSubredditSliceReducer,
        filteredPosts: filteredPostsSliceReducer,
        postWithComments: postWithCommentsReducer
    }
})

export default store;