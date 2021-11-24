import React from "react";
import './FilterMenu.css';
import { GoFlame } from 'react-icons/go';
import { CgFileDocument } from 'react-icons/cg';
import { HiTrendingUp } from 'react-icons/hi';
import { RiBarChart2Fill } from 'react-icons/ri';
import { MdAutoAwesomeMotion } from 'react-icons/md';
import { Link } from "react-router-dom";
    

const FilterMenu = () => {
    return (
        <aside data-testid='filter-menu' className='filter'>
            <Link to='/'>
                <div data-testid='filter-container' className='filter-container'><MdAutoAwesomeMotion data-testid='all-icon' className='filter-icon' /><span data-testid='all-text' className='filter-font'>All</span></div>
            </Link>
            <Link to='/hot'>
                <div data-testid='filter-container' className='filter-container'><GoFlame  className='filter-icon' /> <span  className='filter-font'>Hot</span></div>
            </Link>
            <Link to='/new'>
                <div data-testid='filter-container' className='filter-container'><CgFileDocument  className='filter-icon' /> <span className='filter-font'>New</span></div>
            </Link>
            <Link to='/rising'>
                <div data-testid='filter-container' className='filter-container'><HiTrendingUp  className='filter-icon' /> <span className='filter-font'>Rising</span></div>
            </Link>
            <Link to='/top'>
                <div data-testid='filter-container' className='filter-container'><RiBarChart2Fill  className='filter-icon' /> <span className='filter-font'>Top</span></div>
            </Link>
        </aside>
    )
}

export default FilterMenu;



