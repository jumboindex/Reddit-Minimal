import React from "react";

// media preview helper

export const mediaPreview = ( post_hint, url, media ) => {

    if (post_hint ==='link') {
        return ( <div className='external-link'>
                    <a href={url} target='_blank' rel='noopener'>
                    <span>External Link</span>
                    </a>
                 </div>   
                );
    };

    if (post_hint === 'image') {
        return (
            <img src={url} alt='media preview' className='media-preview' />
        );
    };
    
    if (post_hint === 'rich:video') {
        if (url.includes('youtu')) {
            let str = media.oembed.html;
            str.replace('&lt;', '<')
            str.replace('&gt;', '>')
            console.log(str)
            return ({str});
        } else { return ( <embed 
                            type="video/mp4" title='media preview' 
                            src={url} />
        )};
    };

    if (post_hint === 'hosted:video') {
        return (
            <video controls autoplay='' loop aria-label='media preview'>
                <source type="video/mp4" src={media.reddit_video.fallback_url} />
            </video>
        );
    };

    return null;
};

export const postTitleTrim = (postTitle) => {
    if (postTitle.length > 175) {
        let postTitletrimmed = postTitle.slice(0,175) + '...'
        return postTitletrimmed
    }
    return postTitle;
}

export const upvoteFormat = (upvotes) => {
    let str = upvotes.toString();
    if (upvotes > 1000000) {
        return str.slice(0,1) + '.' + str.slice(1,2) + 'M';
    }
    if (upvotes > 100000 && upvotes < 1000000) {
        return str.slice(0,3) + '.' + str.slice(3,4) + 'K';
    }
    if (upvotes > 10000 && upvotes < 100000) {
        return str.slice(0,2) + '.' + str.slice(2,3) + 'K';
    }
    if (upvotes > 1000 && upvotes < 10000) {
        return str.slice(0,1) + '.' + str.slice(1,2) + 'K';
    }
    return str;
}