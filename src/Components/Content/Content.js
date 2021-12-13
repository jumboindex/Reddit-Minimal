import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPosts, fetchInitialPosts, selectInitialPosts, selectInitialPostsError, selectInitialPostsLoading } from "../../Features/initialPostsSlice/initialPostsSlice";
import FilterMenu from "../FilterMenu/FilterMenu";
import Footer from "../Footer/Footer";
import PostContainer from "../PostContainer/PostContainer";
import SubredditMenu from "../SubredditMenu/SubredditMenu";


const Content = () => {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchInitialPosts());

        return () => {
            dispatch(clearPosts())
        }

    },[dispatch]);

    const initialPosts = useSelector(selectInitialPosts);
    const loading = useSelector(selectInitialPostsLoading);
    const error = useSelector(selectInitialPostsError);
    
    return (
        <main data-testid='content' className='main'>
            <FilterMenu />
            <SubredditMenu />
            <PostContainer data={initialPosts} loading={loading} error={error} />
        </main>
    )      
};

export default Content;