import { configureStore } from "@reduxjs/toolkit";
import initialPostsReducer from "../Features/initialPostsSlice/initialPostsSlice";
import subredditImageSliceReducer from "../Features/subredditImageSlice/subredditImageSlice";
import subredditSliceReducer from "../Features/subredditSlice/subredditSlice";
import featuredSubredditSliceReducer from "../Features/featuredSubredditSlice/featuredSubredditSlice";
import filteredPostsSliceReducer from "../Features/filterSlice/filterSlice";
import postWithCommentsReducer from "../Features/postWithCommentsSlice/postWithCommentsSlice";
import subreadditPostSliceReducer from "../Features/subredditPosts/subreadditPostSlice";
import userDetailsReducer from "../Features/userDetailsSlice/userDetailsSlice";
import searchResultsReducer from "../Features/searchResultsSlice/searchResultsSlice";

const store = configureStore({
    reducer: {
        initialPosts: initialPostsReducer,
        subreddits: subredditSliceReducer,
        subredditImages: subredditImageSliceReducer,
        featuredSubreddits: featuredSubredditSliceReducer,
        filteredPosts: filteredPostsSliceReducer,
        postWithComments: postWithCommentsReducer,
        subredditPosts: subreadditPostSliceReducer,
        userDetails: userDetailsReducer,
        searchResults: searchResultsReducer
    }
})

export default store;