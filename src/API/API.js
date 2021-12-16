const apiEndPoint = 'https://api.reddit.com/';
const initialOptions = {
    headers: {
        accept: 'application/json'
    }
};

const getInitialPosts = async () => {

    try {
        const response = await fetch(`${apiEndPoint}.json`, initialOptions);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.data.children;
        }
        throw new Error('request failed' + response.statusText);
    } catch (error) {
        console.log(error);
    }
};

const getSubreddit = async (subreddit) => {
    try {
        const response = await fetch(`${apiEndPoint}${subreddit}/about.json`);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.data;
        }
        throw new Error('request failed' + response.statusText);
    } catch (error) {
        console.log(error);
    }
};

const getFeaturedSubreddits = async () => {
    try {
        const response = await fetch(`${apiEndPoint}subreddits.json`);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.data.children;
        }
        throw new Error('request failed' + response.statusText);
    } catch (error) {
        console.log(error);
    }

}

const getFilteredSubreddits = async (filter) => {
    try {
        const response = await fetch(`${apiEndPoint}${filter}.json`);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.data.children;
        }
        throw new Error('request failed' + response.statusText);
    } catch (error) {
        console.log(error);
    }
}

const getPostWithComments = async ({subreddit, postID}) => {
    try {
        const response = await fetch(`${apiEndPoint}r/${subreddit}/comments/${postID}.json`, initialOptions);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error('request failed' + response.statusText);
    } catch (error) {
        console.log(error);
    }
};

const getSubredditPosts = async (subreddit) => {
    try {
        const response = await fetch(`${apiEndPoint}${subreddit}.json`);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.data.children;
        }
        throw new Error('request failed' + response.statusText);
    } catch (error) {
        console.log(error);
    }
};

const getUserDetails = async (userName) => {
    try {
        const response = await fetch(`${apiEndPoint}user/${userName}/about.json`);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.data;
        }
        throw new Error('request failed' + response.statusText);
    } catch (error) {
        console.log(error);
    }
}

const getSearchResults = async (searchTerm) => {
    try {
        const response = await fetch(`${apiEndPoint}search.json?q=${searchTerm}`);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.data.children;
        }
        throw new Error('request failed' + response.statusText);
    } catch (error) {
        console.log(error);
    }
}

export const API = {
    getInitialPosts,
    getSubreddit,
    getFeaturedSubreddits,
    getFilteredSubreddits,
    getPostWithComments,
    getSubredditPosts,
    getUserDetails,
    getSearchResults
};