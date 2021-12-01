import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchSearchResults, selectSearchResults } from "../../Features/searchResultsSlice/searchResultsSlice";
import PostContainer from "../PostContainer/PostContainer";
import SubredditMenu from "../SubredditMenu/SubredditMenu";

const SearchResults = () => {
    const dispatch = useDispatch();
    const params = useParams()
    useEffect(() => {
        dispatch(fetchSearchResults(params.searchTerm))
    }, [params])

    const posts = useSelector(selectSearchResults);
    return (
        <main className='main'>
            <SubredditMenu />
            <PostContainer data={posts} />
        </main>
    )
};

export default SearchResults;