import React from "react";
import './OptionsMenu.css'
import { ReactComponent as NightMode } from './Icons/NightMode.svg';
import { ReactComponent as Github } from './Icons/Github.svg';
import { ReactComponent as RedditIcon } from './Icons/RedditIcon.svg';

const OptionsMenu = ({ style }) => {
    return (
        <div className='options-menu' style={style}>
            <span className='options-text light-grey veiw-options'> View options </span>
            <NightMode className='icon nightmode-icon' />
            <span className='options-text nightmode-text'>Night Mode</span>
            <label className="nightmode-slider" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
                <div className="round slider"></div>
            </label>
            <span className='options-text light-grey more-stuff'> More Stuff </span> 
            <Github className='icon github-icon' />
            <span className='options-text github-text'>Github</span>
            <RedditIcon className='icon reddit-icon' />
            <span className='options-text reddit-text'>Visit Reddit</span> 
        </div>
    )
}

export default OptionsMenu;