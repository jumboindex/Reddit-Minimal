import React, { useEffect } from "react";
import SubredditCard from "../SubredditCard/SubredditCard";
import './SubredditMenu.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchFeaturedSubreddits, selectFeaturedSubreddits, selectFeaturedSubredditsError, selectFeaturedSubredditsLoading } from "../../Features/featuredSubredditSlice/featuredSubredditSlice";
import SkeletonSubredditCard from "../SkeletonComponents/SkeletonSubredditCard";

const SubredditMenu = () => {
     const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchFeaturedSubreddits());
    },[dispatch])

   const featuredSubreddits =  useSelector(selectFeaturedSubreddits); 
   const loading = useSelector(selectFeaturedSubredditsLoading);
   const error = useSelector(selectFeaturedSubredditsError);

   if (loading) return (
    <aside data-testid='subreddit-menu' className='subreddit-menu'>
            <h3 className='subreddit-menu-heading'>Featured Subreddits</h3>
            <div data-testid='subreddit-card-container' className='subreddit-card-container'>
                <SkeletonSubredditCard />
                <SkeletonSubredditCard />
                <SkeletonSubredditCard />
                <SkeletonSubredditCard />
                <SkeletonSubredditCard />
                <SkeletonSubredditCard />
                <SkeletonSubredditCard />
                <SkeletonSubredditCard />
                <SkeletonSubredditCard />
                <SkeletonSubredditCard />
            </div>
        </aside>
   );
    return (
        <aside data-testid='subreddit-menu' className='subreddit-menu'>
            <h3 className='subreddit-menu-heading'>Featured Subreddits</h3>
            <div data-testid='subreddit-card-container' className='subreddit-card-container'>
                {featuredSubreddits.slice(0,10).map((subredditObject, index) => {
                    return <SubredditCard key={index} data={subredditObject} />
                })}
            </div>
        </aside>
    )
};

export default SubredditMenu;