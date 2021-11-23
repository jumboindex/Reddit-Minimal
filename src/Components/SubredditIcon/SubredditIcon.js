import React from "react";
import { BsPersonFill } from 'react-icons/bs'

        <BsPersonFill className=''/>
const SubredditIcon = ({ imageData, alt}) => { 

let shouldLoad = imageData ?  imageData.shouldLoad : false;

    return (
        <div>
        { shouldLoad ? 
        <img src={imageData.subredditIcon} alt={alt} className='post-card-img' /> 
        : 
        <BsPersonFill className='no-image'/>
        }
        </div>
    )
};

export default SubredditIcon;

