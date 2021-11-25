import React from "react";
import SubredditMenu from "../SubredditMenu/SubredditMenu";
import Thread from "../Thread/Thread";

const PostView = () => {

    return (
        <main className='main'>
            <SubredditMenu />
            <Thread />
        </main>
        )

    };

export default PostView;