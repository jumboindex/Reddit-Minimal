import { configureStore } from "@reduxjs/toolkit";
import initialPostsReducer from "../Features/initialPostsSlice/initialPostsSlice";
import subredditImageSliceReducer from "../Features/subredditImageSlice/subredditImageSlice";
import subredditSliceReducer from "../Features/SubredditSlice/SubredditSlice";

const store = configureStore({
    reducer: {
        initialPosts: initialPostsReducer,
        subreddits: subredditSliceReducer,
        subredditImages: subredditImageSliceReducer
    }
})

export default store;