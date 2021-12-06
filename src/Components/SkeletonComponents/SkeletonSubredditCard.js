import React from "react";

const SkeletonSubredditCard = () => {
    return (
        <div data-testid='subreddit-card' 
            className='subreddit-card' >
              <div className='subreddit-card-img-container skeleton'>
                </div>
                <div className='subreddit-card-text-container'
                    style={{width: '65%'}} >
                    <span className='subreddit-card-title' style={{width: '70%'}} >
                        <div className='skeleton-detail skeleton'></div>
                        <div className='skeleton-detail skeleton'
                            style={{marginTop: '0.5em'}}> </div>
                    </span>
                </div>  
        </div>
    );
};

export default SkeletonSubredditCard; 