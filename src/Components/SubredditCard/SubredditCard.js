import React from "react";
import './SubredditCard.css';

const SubredditCard = () => {

    return (
        <div data-testid='subreddit-card' className='subreddit-card'>
            <div className='subreddit-card-img-container'>
                <img className='subreddit-card-img' />
            </div>
            <div className='subreddit-card-text-container'>
                <span className='subreddit-card-title'> r/AskReddit</span>
                <br />
                <span className='subreddit-card-subs'>34,656,555 subscribers</span>
            </div>
        </div>
    );

};

export default SubredditCard