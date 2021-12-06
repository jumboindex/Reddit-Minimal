import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearComments, clearPost, fetchPostWithComments, selectComments, selectPost, selectPostWithCommentsError, selectPostWithCommentsLoading } from "../../Features/postWithCommentsSlice/postWithCommentsSlice";
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
    const loading = useSelector(selectPostWithCommentsLoading);
    const error = useSelector(selectPostWithCommentsError);
    const shouldLoad = Object.keys(postData).length !== 0 ? true : false; 
    return (
        <main className='main'>
            <SubredditMenu />
            <Thread post={postData} 
                    comments={commentData} 
                    params={params} 
                    loading={loading} 
                    error={error}
                    shouldLoad={shouldLoad} />   
        </main>
        )

    };

export default PostView;