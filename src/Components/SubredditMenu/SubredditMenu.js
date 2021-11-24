import React, { useEffect } from "react";
import SubredditCard from "../SubredditCard/SubredditCard";
import './SubredditMenu.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchFeaturedSubreddits, selectFeaturedSubreddits } from "../../Features/featuredSubredditSlice/featuredSubredditSlice";

const SubredditMenu = () => {
     const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchFeaturedSubreddits());
    },[dispatch])

   const featuredSubreddits =  useSelector(selectFeaturedSubreddits); 

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