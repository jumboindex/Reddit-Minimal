import React from "react";
import './Navbar.css';
import { ReactComponent as Logo } from './Logo/Reddit-Logo-Light.svg'
import Searchbar from "../Searchbar/Searchbar";
import MenuButton from "../MenuButton/MenuButton";

const Navbar = () => {

    return (
        <nav data-testid='navbar'  aria-label='site navigation bar'>
            <Logo data-testid='reddit-logo' className='logo' alt='reddit logo' />
            <Searchbar />
            <MenuButton />
        </nav>
    )
};

export default Navbar;