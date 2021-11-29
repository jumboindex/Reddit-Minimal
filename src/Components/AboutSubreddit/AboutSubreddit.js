import React from "react";
import "./AboutSubreddit.css";
import { FaBirthdayCake } from 'react-icons/fa'
import { getDate, upvoteFormat } from "../../Helpers/helpers";

const AboutSubreddit = ({ data }) => {
    
    const { display_name, display_name_prefixed, public_description, subscribers, active_user_count, created} = data;
    
    return (
        <aside  className='about'>
            <h3>About {display_name} Community</h3>
            <section className='about-body'>
                <p>{display_name_prefixed} {public_description} </p>
                <div className='about-data'>
                    <div className='about-column'>
                        <span className='about-subscribers data'> {upvoteFormat(subscribers)} </span>
                        <span className='about-text'>Subscribers</span>
                    </div>
                    <div className='about-column'>
                        <span className='about-users-online data'> {upvoteFormat(active_user_count)} </span>
                        <span className='about-text'> Online </span>
                    </div>
                </div>
            </section>
            <footer className='about-footer'>
                <FaBirthdayCake className='about-cake' />
                <span className='creation-date'> Created {getDate(created)} </span>
            </footer>
        </aside> 
    ); 
    
};

export default AboutSubreddit;