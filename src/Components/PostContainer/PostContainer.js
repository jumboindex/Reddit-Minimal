import React, { useEffect } from "react";
import ErrorCard from "../ErrorCard/ErrorCard";
import Footer from "../Footer/Footer";
import NoResultsCard from "../NoResultsCard/NoResultsCard";
import PostCard from "../Posts/PostCard";
import SkeletonPostCard from "../SkeletonComponents/SkeletonPostCard";
import './PostContainer.css';

const PostContainer = ({ data, loading, noResults, error }) => {
    const skeletonNumber = 24;

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    if (loading) return (
        <section data-testid='post-container' className='post-container'>
        { [...Array(skeletonNumber)].map((n, index) => {
            return <SkeletonPostCard key={index} />
        })}
            <Footer />         
        </section>); 
        
    if (noResults) return (
        <section data-testid='post-container' className='post-container'>
            <NoResultsCard />
            <Footer />
        </section>
    );

    if (error) return (
        <section data-testid='post-container' className='post-container'>
            <ErrorCard /> 
            <Footer /> 
        </section>
    );

    return (
        <section data-testid='post-container' className='post-container'>
            {data.map( (post, index) => 
            <PostCard key={index} data={post} />)}
            <Footer />
        </section>
    )
};

export default PostContainer; 