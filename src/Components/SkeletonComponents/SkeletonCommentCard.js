import React from "react";

const SkeletonCommentCard = () => {
    return (
        <section className='comment-card skeleton' 
                style={{width: '85%', 
                        height:'7em', 
                        marginLeft: '3em', 
                        marginBottom: '2em', 
                        borderLeft: 'none'}}>
        </section>
    );
};

export default SkeletonCommentCard;