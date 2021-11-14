import React from "react";
import './OptionsMenu.css'
import { ReactComponent as NightMode } from './Icons/NightMode.svg';
import { ReactComponent as Github } from './Icons/Github.svg';
import { ReactComponent as RedditIcon } from './Icons/RedditIcon.svg';

const OptionsMenu = ({ style }) => {
    return (
        <div aria-label='site options menu' className='options-menu' style={style}>
            <span className='options-text light-grey veiw-options'> View options </span>
            <NightMode className='icon nightmode-icon' />
            <span className='options-text nightmode-text'>Night Mode</span>
            <label id='nightmode-slider' className="nightmode-slider" htmlFor="checkbox">
                <input aria-labelledby='nightmode-slider' type="checkbox" id="checkbox" />
                <div aria-labelledby='nightmode-slider' className="round slider"></div>
            </label>
            <span className='options-text light-grey more-stuff'> More Stuff </span> 
            <Github alt='github icon' className='icon github-icon' />
            <span className='options-text github-text'>Github</span>
            <RedditIcon alt='github icon' className='icon reddit-icon' />
            <span className='options-text reddit-text'>Visit Reddit</span> 
        </div>
    )
}

export default OptionsMenu;