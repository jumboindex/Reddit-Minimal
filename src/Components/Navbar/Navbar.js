import React from "react";
import './Navbar.css';
import { ReactComponent as Logo } from './Logo/Reddit-Logo-Light.svg'
import { ReactComponent as MenuIcon } from './Menu-Icons/three-dots-vertical.svg'

import Searchbar from "../Searchbar/Searchbar";

const Navbar = () => {
    return (
        <nav>
            <Logo className='logo' />
            <Searchbar />
            <button className='menu-btn'>
                <MenuIcon className='menu' />
            </button>
        </nav>
    )
};

export default Navbar;