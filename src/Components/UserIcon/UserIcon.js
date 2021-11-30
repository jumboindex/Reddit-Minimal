import React from "react";
import { BsPersonFill } from 'react-icons/bs'
import { getIconURL } from "../../Helpers/helpers";

const UserIcon = ({userData}) => {

    const shouldLoad = userData ?  userData.shouldLoad : false;

    return (
        <div>
            { shouldLoad ? 
            <img src={getIconURL(userData.userIcon)} alt={userData.userName + ' icon'} className='user-icon' /> 
            : 
            <BsPersonFill className='no-image'/>
            }
        </div> )
}

export default UserIcon;