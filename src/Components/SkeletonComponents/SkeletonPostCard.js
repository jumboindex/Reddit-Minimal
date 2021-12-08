import React from "react";

const SkeletonPostCard = () => {

return (
    <div data-testid='post-card' className='post-card'>
            <div className='post-card-container'>
                <header className='post-card-title'>
                    <div className='post-card-img-container skeleton'></div>
                    <span className='post-card-link' style={{width: '10%'}}> <div className='skeleton skeleton-detail'></div> </span>
                    <span className='post-card-posted-by' style={{width: '15%'}}><div className='skeleton skeleton-detail'></div></span>
                </header>

                <div className='post-card-content'>
                    <h2 className='post-card-preview'>
                        <div className='skeleton skeleton-text'></div>
                        <div className='skeleton skeleton-text'></div>
                        <div className='skeleton skeleton-text'></div>
                    </h2>
                    <footer className='post-card-footer' style={{width: '60%'}} >
                        <div className='skeleton skeleton-detail' 
                        style={{width: '50%',
                                margin: '0 0 1.5em 1em'}} >
                        </div>
                    </footer>
                </div>    
            </div> 
            <aside className='post-card-votes'>
                <div className='skeleton skeleton-detail'></div>
            </aside>
        </div>
)

};

export default SkeletonPostCard;