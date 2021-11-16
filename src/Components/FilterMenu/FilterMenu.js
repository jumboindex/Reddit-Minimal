import React from "react";
import './FilterMenu.css';
import { GoFlame } from 'react-icons/go';
import { CgFileDocument } from 'react-icons/cg';
import { HiTrendingUp } from 'react-icons/hi';
import { RiBarChart2Fill } from 'react-icons/ri';
import { MdAutoAwesomeMotion } from 'react-icons/md';
    

const FilterMenu = () => {

    //const [GoFlame, IoDocumentTextOutline, HiTrendingUp, RiBarChart2Fill, MdAutoAwesomeMotion] = menuIcons;    
    //const menuText = ['All', 'Hot', 'New', 'Rising', 'Top' ]

    return (
        <div data-testid='filter-menu' className='filter'>
            <div data-testid='filter-container' className='filter-container'><MdAutoAwesomeMotion className='filter-icon' /><span className='filter-font'>All</span></div>
            <div data-testid='filter-container' className='filter-container'><GoFlame  className='filter-icon' /> <span className='filter-font'>Hot</span></div>
            <div data-testid='filter-container' className='filter-container'><CgFileDocument  className='filter-icon' /> <span className='filter-font'>New</span></div>
            <div data-testid='filter-container' className='filter-container'><HiTrendingUp  className='filter-icon' /> <span className='filter-font'>Rising</span></div>
            <div data-testid='filter-container' className='filter-container'><RiBarChart2Fill  className='filter-icon' /> <span className='filter-font'>Top</span></div>
        </div>
    )
}

export default FilterMenu;



