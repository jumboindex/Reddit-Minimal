import React, { useEffect, useState } from "react";
import './Navbar.css';
import { ReactComponent as LogoLight } from './Logo/Reddit-Logo-Light.svg'
import { ReactComponent as LogoDark } from './Logo/Reddit-Logo-Dark.svg'
import Searchbar from "../Searchbar/Searchbar";
import MenuButton from "../MenuButton/MenuButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTheme, selectTheme } from "../../Features/themeSlice/themeSlice";
import useLocalStorage from "use-local-storage";

const Navbar = () => {

   
    const currentTheme = useSelector(selectTheme);
    const [ localTheme ] = useLocalStorage('app-theme', 'light')
    const [scrolled, setScrolled] = useState(false);
    const dispatch = useDispatch();
   
    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 50) setScrolled(true);
            else setScrolled(false);
        };
    }, []);

    useEffect(() => {
        dispatch(addTheme(localTheme));
    }, [localTheme, dispatch])


    return (
        <nav data-testid='navbar'  aria-label='site navigation bar' className={scrolled ? 'nav-shaddow nav-main' : 'nav-main'}>
            <Link to='/'>  
        
                    { currentTheme === 'light' ? <LogoLight data-testid='reddit-logo' className='logo' alt='reddit logo' />
                    : <LogoDark data-testid='reddit-logo' className='logo' alt='reddit logo' />}
            </Link>    
            <Searchbar />
            <MenuButton />
        </nav>
    )
};

export default Navbar;