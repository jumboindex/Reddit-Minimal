import React from "react";

// media preview helper
// Reddit JSON API provides a post_hint key:value, and this this function formats any associated media 
export const mediaPreview = ( post_hint, url, media, requestor ) => {
    // external links - creates hyperlink 
    if (post_hint ==='link') {
        return ( <div className='external-link'>
                    <a href={url} target='_blank' rel="noreferrer">
                    <span>External Link</span>
                    </a>
                 </div>   
                );
    };
    // creates HTML for image associated with post
    if (post_hint === 'image') {
        return (
            <img src={url} alt='media preview' className='media-preview' />
        );
    };
    // Rich video or youtube vidoes can be found under the post_hint:rich:video key/value
    // todo - figure out how to parse iframe html strings - "https://gfycat.com" - also produces these.
    if (post_hint === 'rich:video') {
        if (url.includes('youtu')) {
            const escapedIframeString = media.oembed.html;
            const regex = /(https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/m;
            const match = escapedIframeString.match(regex)
           // different height values are required depending on where the video is displayed
           
           // post card view 
           if (match && requestor === 'post-card') {  
                return ( 
                    <iframe 
                    style={{width:"100%", height:"100%"}}
                    width="560" 
                            height="315" 
                            src={match[0]}
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                    </iframe>) 
                } else if (match && requestor === 'thread') {
                    // thread view
                    return (
                            <iframe 
                                style={{width:"100%", maxHeight:"100%"}}
                                    width="560" 
                                    height="315" 
                                    src={match[0]}
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                            </iframe> )

            } else return null;
            
        } else {
            // other video formats 
             return ( <embed 
                            type="video/mp4" title='media preview' 
                            src={url} muted />)
        };
    };
    // reddit hosted videos - note api only provides media with no sound - see bug #1 
    if (post_hint === 'hosted:video') {
        return (
            <video controls loop muted aria-label='media preview'>
                <source type="video/mp4" src={media.reddit_video.fallback_url} />
            </video>
        );
    };

    return null;
};

export const postTitleTrim = (postTitle) => {
    if (postTitle.length > 175) {
        const postTitletrimmed = postTitle.slice(0,175) + '...'
        return postTitletrimmed
    }
    return postTitle;
}

export const upvoteFormat = (upvotes) => {
    if (upvotes === undefined) return 0;
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

export const addCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const getPostTime = (timeStamp) => {
    const currentTime = Date.now()
    const postDate = new Date(timeStamp * 1000)
    
    const differenceInSeconds = (currentTime - postDate) / 1000;
    const years = Math.floor(differenceInSeconds/31536000)
    const days = Math.floor(differenceInSeconds / 86400);
    const hours = Math.floor(differenceInSeconds / 3600);
    const minutes = Math.floor((differenceInSeconds % 3600) / 60);

    if (years > 0) return `${years} years ago`;
    if (days > 0) return `${days} days ago`;
    if (hours > 0) return `${hours} hours ago`;
    if (minutes > 0 ) return `${minutes} minuets ago`;
    return NaN + ' ago';
}

export const getDate = (timeStamp) => {
    const date = new Date(timeStamp * 1000)
    return date.toDateString().replace(/(\w{3}) /m, '');
}

export const getIconURL = (urlString) => {
    // \+ escaped -  https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#&//=]*)/g
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#&//=]*)/g;
    const iconURL = urlString.match(regex);
    if (iconURL) return iconURL;
    return urlString
}

 export const updateBodyTheme = (theme) => {
    if (theme === 'dark') return document.documentElement.setAttribute('data-theme', 'dark');
    if (theme === 'light') return document.documentElement.removeAttribute('data-theme', 'dark');
    return null;
  }

  export const copyToClipboard = () => {
      const url = window.location.href;
      try {
          navigator.clipboard.writeText(url);
      } catch (error) {
          console.log(error);
      }
  };