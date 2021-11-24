import React from "react";
import PostCard from "../Posts/PostCard";
import './PostContainer.css'

const PostContainer = ({ data }) => {

    return (
        <section data-testid='post-container' className='post-container'>
             {data.map( (post, index) => 
            <PostCard key={index} data={post} />)}
        </section>
    )
};

export default PostContainer;