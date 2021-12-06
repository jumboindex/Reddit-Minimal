import React from "react";
import SkeletonCommentCard from "./SkeletonCommentCard";

const SkeletonThread = () => {

    return ( 
        <article className='thread-container'>
            <nav>
                <span className='subreddit-path font skeleton' style={{width: '40%'}}> </span>
            </nav>    
            <header className='thread-header flex' >
                <div className='upvotes-container flex'>
                    <span className='upvotes flex' style={{width: '49%'}}>              
                        <div className='skeleton skeleton-detail'></div>
                    </span>
                    <span className='thread-ratio' style={{width: '31%'}}>
                        <div className='skeleton skeleton-detail'></div>
                    </span>
                </div>
                <section className='thread-details flex'>
                    <div className='thread-user-container flex'>
                        <div className='thread-image-container skeleton'> </div>
                        <span className='post-user-name' style={{width: '50%'}}> 
                            <div className='skeleton skeleton-text' style={{width: '60%'}}></div>
                        </span>
                    </div>
                    <div className='thread-title-container' style={{width: '40em'}}>
                        <div className='skeleton skeleton-title'></div>
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
