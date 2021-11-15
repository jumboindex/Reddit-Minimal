import React from "react";
import './Searchbar.css'

const Searchbar = () => {
    return ( 
        <div data-testid='searchbar' className='search-container'>
            <input className='searchbar' type='text' placeholder='Search..'></input>
        </div>
    )
}

export default Searchbar;