import { configureStore } from "@reduxjs/toolkit";
import initialPostsReducer from "../Features/initialPostsSlice/initialPostsSlice";
import subredditImageSliceReducer from "../Features/subredditImageSlice/subredditImageSlice";
import subredditSliceReducer from "../Features/subredditSlice/subredditSlice";
import featuredSubredditSliceReducer from "../Features/featuredSubredditSlice/featuredSubredditSlice";

const store = configureStore({
    reducer: {
        initialPosts: initialPostsReducer,
        subreddits: subredditSliceReducer,
        subredditImages: subredditImageSliceReducer,
        featuredSubreddits: featuredSubredditSliceReducer
    }
})

export default store;