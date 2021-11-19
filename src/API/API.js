const apiEndPoint = 'https://www.reddit.com/';
const initialOptions = {
    headers: {
        accept: 'application/json',
    }
};

const getInitialPosts = async () => {

    try {

        const response = await fetch(`${apiEndPoint}.json`, initialOptions);

        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse.data.children)
            return jsonResponse.data.children;
        }
    
        throw new Error('request failed' + response.statusText);

    } catch (error) {
        console.log(error)
    }

};



export const API = {
    getInitialPosts
};