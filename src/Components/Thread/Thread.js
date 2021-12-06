import Markdown from "markdown-to-jsx";
import { useEffect } from "react";
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserDetails } from "../../Features/userDetailsSlice/userDetailsSlice";
import { getPostTime, mediaPreview, upvoteFormat } from "../../Helpers/helpers";
import CommentCard from "../CommentCard/CommentCard";
import SkeletonThread from "../SkeletonComponents/SkeletonThread";
import UserIcon from "../UserIcon/UserIcon";
import './Thread.css';



const Thread = ({ post, comments, params }) => {

    let shouldLoad = Object.keys(post).length !== 0 ? true : false; 
    const dispatch = useDispatch();
    const {subreddit, postID } = params;
    const { ups, upvote_ratio, title, author, created, post_hint, url, media, selftext}  = post;
    
    useEffect(() => {
        if (shouldLoad) {
        dispatch(fetchUserDetails(author)) }
    }, [shouldLoad, author, dispatch])

    const userData = useSelector( state => state.userDetails.userDetails[author]);

    if (shouldLoad) return (
        <article className='thread-container'>
            <nav>
                <span className='subreddit-path font'> <Link to='/'> Home </Link> / Subreddits / <Link to={`/subreddit/${subreddit}`}> {subreddit} </Link> / {postID} </span>
            </nav>    
            <header className='thread-header flex' >
                <div className='upvotes-container flex'>
                    <span className='upvotes flex'>
                        <BsBoxArrowInUpRight />
                         { ups ? upvoteFormat(ups) : '...'}
                    </span>
                    <span className='thread-ratio'>
                      { upvote_ratio > 0.01 ? upvote_ratio.toString().slice(2,4): 1 }% ratio 
                    </span>
                </div>
                <section className='thread-details flex'>
                    <div className='thread-user-container flex'>
                        <div className='thread-image-container'> 
                            <UserIcon userData={userData} />
                        </div>
                        <span className='post-user-name'> {author} </span>
                        <span className='post-time'> {getPostTime(created)}</span>
                    </div>
                    <div className='thread-title-container'>
                        <h1>{title}</h1>
                        <div className='underline'></div>
                    </div>
                </section>
            </header>
            <section className='thread-body'>
                {selftext ? <Markdown>{selftext}</Markdown> : null}
                { post_hint ? <div className='thread-media-preview'>{mediaPreview(post_hint, url, media)} </div> : null}
            </section>
            <section className='thread-comments'>
                <h2>Discussions</h2>
                {comments.map((comment, index) => {
                    return (<CommentCard key={index} comment={comment} />);
                })}
            </section>
        </article>
    )

    return (
        <SkeletonThread /> 
    )
};

export default Thread;

