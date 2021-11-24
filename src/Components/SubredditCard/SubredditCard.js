import React from "react";
import { addCommas } from "../../Helpers/helpers";
import SubredditIcon from "../SubredditIcon/SubredditIcon";
import './SubredditCard.css';

const SubredditCard = ({ data }) => {
    const { display_name_prefixed, subscribers, icon_img } = data.data;

   
    return (
        <div data-testid='subreddit-card' className='subreddit-card'>
            <div className='subreddit-card-img-container'>
                { icon_img ? <img src={icon_img} alt={display_name_prefixed + ' icon'} className='subreddit-card-img' /> : <SubredditIcon className='subreddit-icon' /> }
            </div>
            <div className='subreddit-card-text-container'>
                <span className='subreddit-card-title'>{display_name_prefixed}</span>
                <br />
                <span className='subreddit-card-subs'>{addCommas(subscribers)} subscribers</span>
            </div>
        </div>
    );

};

export default SubredditCard;
