import React from "react";
import "./AboutSubreddit.css";
import { FaBirthdayCake } from 'react-icons/fa'

const AboutSubreddit = () => {

    return (
        <aside  className='about'>
            <h3>About Subreddit Community</h3>
            <section className='about-body'>
                <p>r/AskReddit is the place to ask and answer thought-provoking questions.</p>
                <div className='about-data'>
                    <div className='about-column'>
                        <span className='about-subscribers data'> 34.2M </span>
                        <span className='about-text'>Subscribers</span>
                    </div>
                    <div className='about-column'>
                        <span className='about-users-online data'> 61.1K </span>
                        <span className='about-text'> Online </span>
                    </div>
                </div>
            </section>
            <footer className='about-footer'>
                <FaBirthdayCake className='about-cake' />
                <span className='creation-date'> Created January 25, 2008</span>
            </footer>
        </aside>
    );

};

export default AboutSubreddit;