import React from "react";
import './OptionsMenu.css'
import { GiNightSky } from 'react-icons/gi';
import { FaGithub, FaRedditAlien } from 'react-icons/fa';
import { WiDaySunny } from 'react-icons/wi';
import useLocalStorage from 'use-local-storage';
import { updateBodyTheme } from "../../Helpers/helpers";
import { useDispatch } from "react-redux";
import { addTheme } from "../../Features/themeSlice/themeSlice";

const OptionsMenu = () => {

    const dispatch = useDispatch();
    const currentTheme = window.localStorage.getItem('theme');
    const [theme, setTheme] = useLocalStorage('app-theme', currentTheme === 'dark' ? 'dark' : 'light');

    const handleClick = () => {
        // set theme is asynchronous and hence strings have to be passed to store and updateBodyTheme or the old theme is passed.
        if (theme === 'light') {
            setTheme('dark');
            dispatch(addTheme('dark'));
            return updateBodyTheme('dark');
        }
        if (theme === 'dark') {
            setTheme('light');
            dispatch(addTheme('light'));
            return updateBodyTheme('light');
        }
    } 

    return (
            <div data-testid='options-menu' aria-label='site options menu' className='options-menu'>
                <span className='options-text light-grey veiw-options'> View options </span>
                { theme === 'dark' ? <GiNightSky data-testid='night-mode-icon' className='icon nightmode-icon' /> 
                : <WiDaySunny data-testid='night-mode-icon' className='icon nightmode-icon' />}
                <span className='options-text nightmode-text'>Night Mode</span>
                <label id='nightmode-slider' className="nightmode-slider" htmlFor="checkbox">
                    <input  data-testid='nightmode-checkbox' 
                            aria-labelledby='nightmode-slider' 
                            type="checkbox" 
                            id="checkbox" 
                            onClick={() => handleClick()} 
                            />
                    <div data-testid='nightmode-slider' 
                        aria-labelledby='nightmode-slider' 
                        className="round slider">
                    </div>
                </label>
                <span className='options-text light-grey more-stuff'> More Stuff </span> 
                <a className='github-anchor' href='https://github.com/jumboindex/Reddit-Minimal' target='_blank' rel="noreferrer">
                    <FaGithub data-testid='github-icon' alt='github icon' className='icon github-icon' />
                    <span className='options-text github-text'>Github</span>
                </a>
                <a className='reddit-anchor'  href='https://reddit.com' target='_blank' rel="noreferrer">
                    <FaRedditAlien data-testid='reddit-icon' alt='github icon' className='icon reddit-icon' />
                    <span href='https://reddit.com' target='_blank' rel="noreferrer" className='options-text reddit-text'>Visit Reddit</span> 
                </a>
            </div>
        )
      
}

export default OptionsMenu;