import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearComments, clearPost, fetchPostWithComments, selectComments, selectPost } from "../../Features/postWithCommentsSlice/postWithCommentsSlice";
import SubredditMenu from "../SubredditMenu/SubredditMenu";
import Thread from "../Thread/Thread";

const PostView = () => {
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
    dispatch(fetchPostWithComments(params))
        return () => {
            dispatch(clearPost());
            dispatch(clearComments());
        }
    }, [dispatch, params])

    const postData = useSelector(selectPost);
    const commentData = useSelector(selectComments);
    return (
        <main className='main'>
            <SubredditMenu />
            { postData && <Thread post={postData} comments={commentData} params={params} />}   
        </main>
        )

    };

export default PostView;