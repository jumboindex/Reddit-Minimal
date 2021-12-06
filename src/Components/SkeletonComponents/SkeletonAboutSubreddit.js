import React from "react";

const SkeletonAboutSubreddit = () => {
    return (
        <aside  className='about'>
            <h3><div className='skeleton-title skeleton'
                style={{width: '80%', marginBottom: '0.5em'}}></div> </h3>
            <section className='about-body' style={{padding: '0.5em 0 0.5em'}}>
                    <div className='skeleton-text skeleton'></div>
                    <div className='skeleton-text skeleton'></div>
                    <div className='skeleton-text skeleton'></div>
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