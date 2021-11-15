import React, {  useState } from "react";
import OptionsMenu from "../Options-Menu/OptionsMenu";
import { ReactComponent as MenuIcon } from './Menu-Icons/three-dots-vertical.svg'
import { CSSTransition } from "react-transition-group";


const MenuButton = () => {
    const [ display, setDisplay ] = useState(false);
    return (
        <div data-testid='menu-button-component'>
            <button data-testid='menu-button' aria-label='menu button' className='menu-btn' onClick={() => setDisplay(!display)}>
                <MenuIcon data-testid='menu-icon' alt='menu button icon' className='menu' />
            </button>
            <CSSTransition 
                            in={display} 
                            timeout={400} 
                            classNames={'options-menu'} 
                            mountOnEnter={false}
                            unmountOnExit={true}
                            >
                <OptionsMenu />
            </CSSTransition>    
        </div>
    )
}    


export default MenuButton;