import React from "react";
import FilterMenu from "../FilterMenu/FilterMenu";
import './Content.css'

const Content = () => {
    return (
        <main data-testid='content' className='main'>
            <FilterMenu />
        </main>
    )      
};

export default Content;