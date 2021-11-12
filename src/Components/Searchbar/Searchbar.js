import React from "react";
import './Searchbar.css'

const Searchbar = () => {
    return ( 
        <div className='search-container'>
            <input className='searchbar' type='text' placeholder='Search..'></input>
        </div>
    )
}

export default Searchbar;