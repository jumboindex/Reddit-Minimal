import React from "react";
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import CommentCard from "../CommentCard/CommentCard";
import UserIcon from "../UserIcon/UserIcon";
import './Thread.css';
const Thread = () => {
    return (
        <article className='thread-container'>
            <nav>
                <span className='subreddit-path font'> Home / Subreddits / StupidQuestions / PostID</span>
            </nav>    
            <header className='thread-header flex' >
                <div className='upvotes-container flex'>
                    <span className='upvotes flex'>
                        <BsBoxArrowInUpRight />
                         31K
                    </span>
                    <span className='ratio'>
                       81% ratio 
                    </span>
                </div>
                <section className='thread-details flex'>
                    <div className='thread-user-container flex'>
                        <div className='thread-image-container'> 
                            <UserIcon />
                        </div>
                        <span className='post-user-name'> RedditUser </span>
                        <span className='post-time'> 8 hours ago</span>
                    </div>
                    <div className='thread-title-container'>
                        <h1>Thread Title</h1>
                        <div></div>
                    </div>
                </section>
            </header>
            <section className='thread-body'>
                <p> post body text</p>
            </section>
            <section className='thread-comments'>
                <h2>Discussions</h2>
                <CommentCard />
            </section>
        </article>

    )
};

export default Thread;