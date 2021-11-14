import React from "react";
import './Navbar.css';
import { ReactComponent as Logo } from './Logo/Reddit-Logo-Light.svg'
import Searchbar from "../Searchbar/Searchbar";
import MenuButton from "../MenuButton/MenuButton";

const Navbar = () => {

    return (
        <nav aria-label='site navigation bar'>
            <Logo className='logo' alt='reddit logo' />
            <Searchbar  />
            <MenuButton />
        </nav>
    )
};

export default Navbar;