import React from "react";
import PostCard from "../Posts/PostCard";
import './PostContainer.css'

const PostContainer = () => {
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