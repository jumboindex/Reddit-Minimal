import React, { useState } from "react";
import './CommentCard.css';
import { BsBoxArrowInUpRight, BsShareFill } from 'react-icons/bs';
import { copyToClipboard, getPostTime } from "../../Helpers/helpers";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import renderTooltip from "../Tooltip/Tooltip";
import renderTooltipCopied from "../Tooltip/TooltipCopied";

const CommentCard = ({comment}) => {

    const [ copied, setCopied ] = useState(false);
    
    let shouldLoad = comment && Object.keys(comment).length !== 0 ? true : false; 
    

    if (shouldLoad) return (
        <section className='comment-card'>
            <div className='comment-card-user-details'>         
                <span className='comment-card-username'> {comment.data.author} </span>
                <span className='post-time'> {getPostTime(comment.data.created_utc)} </span>
            </div>
            <div className='comment-card-body'>    
                <p className='comment-text'> {comment.data.body} </p>
            </div>
            <div className='comment-card-actions'>
                <BsBoxArrowInUpRight className='comment-card-icon' />
                <span> {comment.data.ups} Upvotes </span>
                <div    className='comment-card-share' 
                        onClick={() => {
                                        setCopied(true);    
                                        copyToClipboard(); }}>
                    <BsShareFill className='comment-card-icon' />
                    <OverlayTrigger
                                placement="right"
                                delay={{ show: 150, hide: 400 }}
                                overlay={ copied ? renderTooltipCopied : renderTooltip}
                                >
                        <span> Share </span>
                    </OverlayTrigger>
                </div>
            </div>
        </section>
    )
    return null;
};

export default CommentCard;