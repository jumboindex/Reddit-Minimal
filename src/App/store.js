import { configureStore } from "@reduxjs/toolkit";
import initialPostsReducer from "../Features/initialPostsSlice/initialPostsSlice";

const store = configureStore({
    reducer: {
        initialPosts: initialPostsReducer
    }
})

export default store;