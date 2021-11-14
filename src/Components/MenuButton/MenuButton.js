import React, {  useState } from "react";
import OptionsMenu from "../Options-Menu/OptionsMenu";
import { ReactComponent as MenuIcon } from './Menu-Icons/three-dots-vertical.svg'


const MenuButton = () => {
    
    const [ display, setDisplay ] = useState(false);

    return (
        <div>
            <button aria-label='menu button' className='menu-btn' onClick={() => setDisplay(!display)}>
                <MenuIcon aria-lable='menu button icon' className='menu' />
            </button>
            {display && <OptionsMenu id='options-menu' />}
        </div>
    )
}

export default MenuButton;