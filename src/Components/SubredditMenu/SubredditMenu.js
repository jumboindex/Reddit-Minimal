import React from "react";
import SubredditCard from "../SubredditCard/SubredditCard";
import './SubredditMenu.css'

const SubredditMenu = () => {
return (
    <aside data-testid='subreddit-menu' className='subreddit-menu'>
        <h3 className='subreddit-menu-heading'>Featured Subreddits</h3>
        <div data-testid='subreddit-card-container' className='subreddit-card-container'>
            <SubredditCard />
            <SubredditCard />
            <SubredditCard />
            <SubredditCard />
            <SubredditCard />
        </div>
    </aside>
)
};

export default SubredditMenu;