import React from "react";
import FilterMenu from "../FilterMenu/FilterMenu";
import SubredditMenu from "../SubredditMenu/SubredditMenu";
import './Content.css'

const Content = () => {
    return (
        <main data-testid='content' className='main'>
            <FilterMenu />
            <SubredditMenu />
        </main>
    )      
};

export default Content;