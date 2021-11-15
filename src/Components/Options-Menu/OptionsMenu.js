import React from "react";
import './OptionsMenu.css'
import { ReactComponent as NightMode } from './Icons/NightMode.svg';
import { ReactComponent as Github } from './Icons/Github.svg';
import { ReactComponent as RedditIcon } from './Icons/RedditIcon.svg';

const OptionsMenu = () => {
    return (
            <div data-testid='options-menu' aria-label='site options menu' className='options-menu'>
                <span className='options-text light-grey veiw-options'> View options </span>
                <NightMode data-testid='night-mode-icon' className='icon nightmode-icon' />
                <span className='options-text nightmode-text'>Night Mode</span>
                <label id='nightmode-slider' className="nightmode-slider" htmlFor="checkbox">
                    <input data-testid='nightmode-checkbox' aria-labelledby='nightmode-slider' type="checkbox" id="checkbox" />
                    <div data-testid='nightmode-slider' aria-labelledby='nightmode-slider' className="round slider"></div>
                </label>
                <span className='options-text light-grey more-stuff'> More Stuff </span> 
                <Github data-testid='github-icon' alt='github icon' className='icon github-icon' />
                <span className='options-text github-text'>Github</span>
                <RedditIcon data-testid='reddit-icon' alt='github icon' className='icon reddit-icon' />
                <span className='options-text reddit-text'>Visit Reddit</span> 
            </div>
        )
      
}

export default OptionsMenu;