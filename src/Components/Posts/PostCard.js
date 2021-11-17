import React from "react";
import './PostCard.css';
import { MdComment } from 'react-icons/md';
import { BiLinkExternal } from 'react-icons/bi';
import { BsShareFill } from 'react-icons/bs';

const PostCard = () => {

    return (
        <div data-testid='post-card' className='post-card'>
            <div className='post-card-container'>
            <header className='post-card-title'>
                    <div className='post-card-img-container'><img className='post-card-img' /></div>
                    <span className='post-card-link'>r/AskReddit</span>
                    <span className='post-card-posted-by'>Posted by u/React-Tesing-Libary</span>
                </header>
                <h2 className='post-card-preview'>What’s the best testing libary for a React / Redux app?</h2>
                <footer className='post-card-footer'>
                    <div className='post-card-comments'><MdComment /><span className='post-card-text'>Comments</span></div>
                    <div className='post-card-details'><BiLinkExternal /><span className='post-card-text'> Details </span></div>
                    <div className='post-card-share'><BsShareFill /><span className='post-card-text'> Share </span></div>
                </footer>
            </div>
            <div className='post-card-media-preview'> Media</div>
            <aside className='post-card-votes'>
                <span>27k</span>
            </aside>
        </div>
    );
};

export default PostCard;