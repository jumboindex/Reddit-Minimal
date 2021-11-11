import React from "react";
import './Navbar.css';
import { ReactComponent as Logo } from './Logo/Reddit-Logo-Light.svg'

import Searchbar from "../Searchbar/Searchbar";

const Navbar = () => {
    return (
        <nav>
            <Logo className='logo' />
            <Searchbar />
        </nav>
    )
};

export default Navbar;