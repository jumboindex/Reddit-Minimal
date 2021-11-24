import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialPosts, selectInitialPosts } from "../../Features/initialPostsSlice/initialPostsSlice";
import FilterMenu from "../FilterMenu/FilterMenu";
import PostContainer from "../PostContainer/PostContainer";
import SubredditMenu from "../SubredditMenu/SubredditMenu";

const Content = () => {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchInitialPosts());
    },[dispatch]);

    let initialPosts = useSelector(selectInitialPosts);

    return (
        <main data-testid='content' className='main'>
            <FilterMenu />
            <SubredditMenu />
            <PostContainer data={initialPosts} />
        </main>
    )      
};

export default Content;