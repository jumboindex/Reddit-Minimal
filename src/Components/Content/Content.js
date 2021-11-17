import React from "react";
import FilterMenu from "../FilterMenu/FilterMenu";
import PostContainer from "../PostContainer/PostContainer";
import SubredditMenu from "../SubredditMenu/SubredditMenu";
import './Content.css'

const Content = () => {
    return (
        <main data-testid='content' className='main'>
            <FilterMenu />
            <SubredditMenu />
            <PostContainer />
        </main>
    )      
};

export default Content;