import React from "react";
import ErrorCard from "../ErrorCard/ErrorCard";
import NoResultsCard from "../NoResultsCard/NoResultsCard";
import PostCard from "../Posts/PostCard";
import SkeletonPostCard from "../SkeletonComponents/SkeletonPostCard";
import './PostContainer.css';

const PostContainer = ({ data, loading, noResults, error }) => {
    const skeletonNumber = 24;

    if (loading) return (
        <section data-testid='post-container' className='post-container'>
        { [...Array(skeletonNumber)].map((n, index) => {
            return <SkeletonPostCard key={index} />
        })}         
        </section>); 
        
    if (noResults) return (
        <section data-testid='post-container' className='post-container'>
            <NoResultsCard />
        </section>
    );

    if (error) return (
        <section data-testid='post-container' className='post-container'>
            <ErrorCard />  
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