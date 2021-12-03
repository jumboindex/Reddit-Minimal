import React from "react";
import NoResultsCard from "../NoResultsCard/NoResultsCard";
import PostCard from "../Posts/PostCard";
import SkeletonPostCard from "../SkeletonComponents/SkeletonPostCard/SkeletonPostCard";
import './PostContainer.css'

const PostContainer = ({ data, loading }) => {
    const number = 24;

    if (loading) return (
        <section data-testid='post-container' className='post-container'>
            { [...Array(number)].map((n, index) => {
                return <SkeletonPostCard key={index} />
            })}            
        </section>); 
    if (data.length === 0 && !loading) return (
        <section data-testid='post-container' className='post-container'>
            <NoResultsCard />
        </section>
    );

    return (
        <section data-testid='post-container' className='post-container'>
             {data.map( (post, index) => 
            <PostCard key={index} data={post} />)}
        </section>
    )
};

export default PostContainer;