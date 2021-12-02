import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import './Searchbar.css';
import Spinner from 'react-bootstrap/Spinner'
import { FcSearch } from 'react-icons/fc'


const Searchbar = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('Search..');


    const  handleSearchTextChange = (e) => {
        if (e.key === 'Enter' || e.key === 'NumpadEnter') {
           return navigate(`/search/${e.target.value}`);
        } else return;
    }

    useEffect(() => {
        document.addEventListener('keydown', handleSearchTextChange)
        return () => document.removeEventListener('keydown', handleSearchTextChange)
    }, [searchText]);

    return ( 
        <div data-testid='searchbar' className='search-container' tabIndex='1'>
            <input className='searchbar' 
                    type='text' 
                    placeholder={searchText} 
                    onKeyPress={(e) => setSearchText(e.target.value)}
                    />
            <Spinner animation="border" role="status">
                {/* <span className="visually-hidden">Loading...</span> */}
            </Spinner>     
            <FcSearch className='search-icon' />
        </div>
        
    )
}

export default Searchbar;