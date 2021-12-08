import React from "react";
import SkeletonCommentCard from "./SkeletonCommentCard";

const SkeletonThread = () => {

    return ( 
        <article className='thread-container'>
            <nav className='thread-nav' >
                <div className='skeleton skeleton-title' style={{margin: '1em', width: '30%'}}></div>
            </nav>    
            <header className='thread-header flex' >
                <div className='upvotes-container flex'>      
                        <div className='skeleton skeleton-detail' style={{width: '30%', margin: '0.5em'}}></div>                    
                        <div className='skeleton skeleton-detail' style={{width: '30%', margin: '0.5em'}}></div>
                </div>
                <section className='thread-details flex'>
                    <div className='thread-user-container flex'>
                        <div className='thread-image-container skeleton'> </div>
                        <div className='skeleton skeleton-text' style={{width: '25%'}}></div>
                    </div>
                    <div className='thread-title-container' >
                        <div className='skeleton skeleton-title' style={{width: '90%'}}></div>
                        <div className='skeleton skeleton-title'></div>
                    </div>
                </section>
            </header>
            <section className='thread-body'>
                <div className='skeleton skeleton-text'></div>
                <div className='skeleton skeleton-text'></div>
                <div className='skeleton skeleton-text'></div>
            </section>
            <section className='thread-comments'>
                <div className='skeleton skeleton-title' style={{width: '20%', marginLeft: '0'}}></div>
            </section>
                <SkeletonCommentCard />
                <SkeletonCommentCard />
                <SkeletonCommentCard />
                <SkeletonCommentCard />
                <SkeletonCommentCard />
                <SkeletonCommentCard />
                <SkeletonCommentCard />
                <SkeletonCommentCard />
        </article> 
    );
}; 

export default SkeletonThread;
