import React, { useEffect } from "react";
import './PostCard.css';
import { MdComment } from 'react-icons/md';
import { BiLinkExternal } from 'react-icons/bi';
import { BsShareFill } from 'react-icons/bs';
import { mediaPreview, postTitleTrim, upvoteFormat } from "../../Helpers/helpers";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubredditImage } from "../../Features/subredditImageSlice/subredditImageSlice";
import SubredditIcon from "../SubredditIcon/SubredditIcon";



const PostCard = ({ data }) => {

    const { title, subreddit_name_prefixed, author, ups, post_hint, url, media} = data.data;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchSubredditImage(subreddit_name_prefixed));
    }, []);
    
    let subredditImageData = useSelector(state => state.subredditImages.subredditImages[subreddit_name_prefixed]);
    return (
        <div data-testid='post-card' className='post-card'>
            <div className='post-card-container'>
                <header className='post-card-title'>
                    <div className='post-card-img-container'>
                        <SubredditIcon imageData={subredditImageData} alt={subreddit_name_prefixed + ' icon'} />
                    </div>
                    <span className='post-card-link'>{subreddit_name_prefixed}</span>
                    <span className='post-card-posted-by'>Posted by u/{author}</span>
                </header>

                <div className='post-card-content'>
                    <h2 className='post-card-preview'>{postTitleTrim(title)}</h2>
                    <footer className='post-card-footer'>
                        <div className='post-card-actions'><MdComment className='post-card-icon' /><span className='post-card-text'>Comments</span></div>
                        <div className='post-card-actions'><BiLinkExternal className='post-card-icon' /><span className='post-card-text'> Details </span></div>
                        <div className='post-card-actions'><BsShareFill className='post-card-icon' /><span className='post-card-text'> Share </span></div>
                    </footer>
                </div>
            </div> 
            { post_hint ? <div className='post-card-media-preview'>{mediaPreview(post_hint, url, media)} </div> : null}
            <aside className='post-card-votes'>
                <h2>{upvoteFormat(ups)}</h2>
            </aside>
        </div>
    );
};

export default PostCard;


//{subreddit ? <img src={subreddit.subredditIcon} alt={subreddit_name_prefixed + ' icon'} className='post-card-img' /> : null}