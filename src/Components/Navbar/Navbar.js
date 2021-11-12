import React from "react";
import './Navbar.css';
import { ReactComponent as Logo } from './Logo/Reddit-Logo-Light.svg'
import { ReactComponent as MenuIcon } from './Menu-Icons/three-dots-vertical.svg'

import Searchbar from "../Searchbar/Searchbar";
import OptionsMenu from "../Options-Menu/OptionsMenu";

const Navbar = () => {
    return (
        <nav>
            <Logo className='logo' />
            <Searchbar />
            <button className='menu-btn'>
                <MenuIcon className='menu' />
            </button>
            <OptionsMenu />
        </nav>
    )
};

export default Navbar;