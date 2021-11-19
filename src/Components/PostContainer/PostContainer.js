import userEvent from "@testing-library/user-event";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialPosts, selectInitialPosts } from "../../Features/initialPostsSlice/initialPostsSlice";
import PostCard from "../Posts/PostCard";
import './PostContainer.css'

const PostContainer = () => {
   const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchInitialPosts());
    });
   
    return (
        <section data-testid='post-container' className='post-container'>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </section>
    )
};

export default PostContainer;