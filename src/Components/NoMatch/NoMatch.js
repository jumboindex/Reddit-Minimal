import React from "react";
import { MdError } from 'react-icons/md';
import { Link } from "react-router-dom";
import notFoundImage from './image/PeteAndBas.jpg';
import './NoMatch.css';

const NoMatch = () => {
    return (
        <main className='main-404'>
            <div className='image-container-404'> 
                <a href='https://youtu.be/onYiiDy-VV4' target='_blank' rel="noreferrer">
                    <img src={notFoundImage}  alt='404 Pete and Bas' />
                </a>
            </div>
            <p> <MdError /> No match found! </p>
            <p> Either the URL does not exist or the search term is invalid. </p>
            <Link to='/'>
                <button className='button-404'> Go Home</button>
            </Link>
        </main>
        
    );
}

export default NoMatch;