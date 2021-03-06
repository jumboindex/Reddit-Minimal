import React, { useEffect, useState } from "react";
import { MdComment } from 'react-icons/md';
import { BiLinkExternal } from 'react-icons/bi';
import { BsShareFill } from 'react-icons/bs';
import { copyToClipboard, mediaPreview, postTitleTrim, upvoteFormat } from "../../Helpers/helpers";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubredditImage } from "../../Features/subredditImageSlice/subredditImageSlice";
import SubredditIcon from "../SubredditIcon/SubredditIcon";
import { Link } from "react-router-dom";
import { OverlayTrigger } from "react-bootstrap";
import renderTooltip from "../Tooltip/Tooltip";
import renderTooltipCopied from "../Tooltip/TooltipCopied";


const PostCard = ({ data }) => {

    const [ copied, setCopied ] = useState(false);

    const { title, subreddit_name_prefixed, author, ups, post_hint, url, media, subreddit, id} = data.data;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchSubredditImage(subreddit_name_prefixed));
    }, [dispatch, subreddit_name_prefixed]);
    
    const subredditImageData = useSelector(state => state.subredditImages.subredditImages[subreddit_name_prefixed]);
    
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
                    <Link to={`/post/${subreddit}/${id}`}>
                        <h2 className='post-card-preview'>{postTitleTrim(title)}</h2>
                    </Link>
                    <footer className='post-card-footer'>
                        <Link to={`/post/${subreddit}/${id}`}>
                            <div className='post-card-actions'><MdComment className='post-card-icon' /><span className='post-card-text'>Comments</span></div>
                        </Link>    
                        <Link to={`/post/${subreddit}/${id}`}>
                        <div className='post-card-actions'><BiLinkExternal className='post-card-icon' /><span className='post-card-text'> Details </span></div>
                        </Link>
                        <div className='post-card-actions' 
                            onClick={() => {
                                setCopied(true);
                                copyToClipboard(); }}>
                            <BsShareFill className='post-card-icon' />
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 150, hide: 400 }}
                                overlay={ copied ? renderTooltipCopied : renderTooltip}
                                >
                                <span className='post-card-text'> Share </span>
                            </OverlayTrigger>    
                        </div>
                    </footer>
                </div>
            </div> 
            { post_hint ? 
                <div className='post-card-media-preview'>
                    <div className='post-card-media-container'>
                    {mediaPreview(post_hint, url, media, 'post-card')} 
                    </div>
                </div> : null}
            <aside className='post-card-votes'>
                <h2>{upvoteFormat(ups)}</h2>
            </aside>
        </div>
    );
};

export default PostCard;


