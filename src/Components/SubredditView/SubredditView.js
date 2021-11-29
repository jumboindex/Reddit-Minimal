import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearSubredditPosts, fetchSubredditPosts, selectSubredditPosts } from "../../Features/subredditPosts/subreadditPostSlice";
import { fetchSubreddit } from "../../Features/subredditSlice/subredditSlice";
import AboutSubreddit from "../AboutSubreddit/AboutSubreddit";
import PostContainer from "../PostContainer/PostContainer";
import SubredditMenu from "../SubredditMenu/SubredditMenu";

const SubredditVeiw = () => {
    const dispatch = useDispatch()
    const params = useParams();
    const subredditNamePrefixed = 'r/' + params.subreddit

    useEffect(() => {   
        dispatch(fetchSubreddit(subredditNamePrefixed))
        dispatch(fetchSubredditPosts(subredditNamePrefixed))
        return () => {
            dispatch(clearSubredditPosts())
        }
    },[subredditNamePrefixed, dispatch])

    const data = useSelector(state => state.subreddits.subreddits[subredditNamePrefixed]);
    const posts = useSelector(selectSubredditPosts);

    return (
        <main className='main'>
            { data ?  <AboutSubreddit data={data} /> : null }
            <SubredditMenu />
            <PostContainer data={posts} />
        </main>
    );

};

export default SubredditVeiw;