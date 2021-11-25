import React from "react";
import './CommentCard.css';
import { BsBoxArrowInUpRight, BsShareFill } from 'react-icons/bs';

const CommentCard = () => {

    return (
        <section className='comment-card'>
            <div className='comment-card-user-details'>         
                <span className='comment-card-username'> Username </span>
                <span className='post-time'> 19 hours ago </span>
            </div>
            <div className='comment-card-body'>    
                <p className='comment-text'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
            </div>
            <div className='comment-card-actions'>
                <BsBoxArrowInUpRight className='comment-card-icon' />
                <span> Upvotes </span>
                <div className='comment-card-share'>
                <BsShareFill className='comment-card-icon' />
                <span> Share </span>
                </div>
            </div>
        </section>
    )

};

export default CommentCard;