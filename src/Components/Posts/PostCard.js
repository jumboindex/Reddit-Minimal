import React from "react";
import './PostCard.css';
import { MdComment } from 'react-icons/md';
import { BiLinkExternal } from 'react-icons/bi';
import { BsShareFill } from 'react-icons/bs';

const PostCard = () => {

    return (
        <div data-testid='post-card' className='post-card'>
            <div className='post-card-title-container'>
                <div className='post-card-img-container'><img className='post-card-img' /></div>
                <span className='post-card-link'>r/AskReddit</span>
                <span className='post-card-posted-by'>Posted by u/React-Tesing-Libary</span>
            </div>
            <span className='post-card-content-preview'>What’s the best testing libary for a React / Redux app?</span>
            <div className='comment-details-share container'>
                <div className='post-card-comments'><MdComment /><span className='post-card-text'>Comments</span></div>
                <div className='post-card-details'><BiLinkExternal /><span className='post-card-text'> Details </span></div>
                <div className='post-card-share'><BsShareFill /><span className='post-card-text'> Share </span></div>
            </div>

            <div className='post-card-media-preview'> Media</div>
            <div className='post-card-votes'>27k</div>
        </div>
    );
};

export default PostCard;