import React from "react";
import './Navbar.css';
import { ReactComponent as Logo } from './Logo/Reddit-Logo-Light.svg'
import Searchbar from "../Searchbar/Searchbar";
import MenuButton from "../MenuButton/MenuButton";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav data-testid='navbar'  aria-label='site navigation bar'>
            <Link to='/'>    
                <Logo data-testid='reddit-logo' className='logo' alt='reddit logo' />
            </Link>    
            <Searchbar />
            <MenuButton />
        </nav>
    )
};

export default Navbar;