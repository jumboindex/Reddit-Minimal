import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import './Searchbar.css';
import Spinner from 'react-bootstrap/Spinner'
import { FcSearch } from 'react-icons/fc'


const Searchbar = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');

    const handleSearchIconClick = () => {
        if(searchText !== '') {
            navigate(`/search/${searchText}`);
            return setSearchText('');
        } else return;
    }

    useEffect(() => {

        const  handleSearchTextChange = (e) => {
            if (e.key === 'Enter' || e.key === 'NumpadEnter') {
                navigate(`/search/${e.target.value}`);
                 return setSearchText('');
                } else return;
        }

        document.addEventListener('keydown', handleSearchTextChange);

        return () => document.removeEventListener('keydown', handleSearchTextChange);
        
    }, [searchText, navigate]);

    return ( 
        <div 
            data-testid='searchbar' 
            className='search-container' 
            tabIndex='1'>
            <input className='searchbar' 
                    type='text' 
                    value={searchText}
                    placeholder='Search...' 
                    onChange={(e) => setSearchText(e.target.value)}
                    />

                    {searchText !== '' && 
                    <Spinner animation="border" role="status" >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>}         
              
            <FcSearch className='search-icon' onClick={() => handleSearchIconClick()} />
        </div>
        
    )
}

export default Searchbar;