import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialPosts, selectInitialPosts } from "../../Features/initialPostsSlice/initialPostsSlice";
import PostCard from "../Posts/PostCard";
import './PostContainer.css'

const PostContainer = () => {
   const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInitialPosts());
    },[]);

    let initialPosts = useSelector(selectInitialPosts);
   
    return (
        <section data-testid='post-container' className='post-container'>
             {initialPosts.map( (post, index) => 
            <PostCard key={index} data={post} />)}
        </section>
    )
};

export default PostContainer;