import React from "react";

const SkeletonAboutSubreddit = () => {
    return (
        <aside  className='about'>
            <h3><div className='skeleton-title skeleton'
                style={{width: '80%'}}></div> </h3>
            <section className='about-body'>
                <p>
                    <div className='skeleton-text skeleton'></div>
                    <div className='skeleton-text skeleton'></div>
                    <div className='skeleton-text skeleton'></div>
                </p>
            </section>
            <footer className='about-footer'>
                <span className='creation-date'>
                    <div className='skeleton-text skeleton'></div>  
                </span>
            </footer>
        </aside> 
    );
}

export default SkeletonAboutSubreddit;