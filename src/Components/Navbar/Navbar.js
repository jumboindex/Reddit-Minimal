import React, { useEffect, useState } from "react";
import './Navbar.css';
import { ReactComponent as Logo } from './Logo/Reddit-Logo-Light.svg'
import Searchbar from "../Searchbar/Searchbar";
import MenuButton from "../MenuButton/MenuButton";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 50) setScrolled(true);
            else setScrolled(false);
        };
    }, []);


    return (
        <nav data-testid='navbar'  aria-label='site navigation bar' className={scrolled ? 'nav-shaddow nav-main' : 'nav-main'}>
            <Link to='/'>    
                <Logo data-testid='reddit-logo' className='logo' alt='reddit logo' />
            </Link>    
            <Searchbar />
            <MenuButton />
        </nav>
    )
};

export default Navbar;