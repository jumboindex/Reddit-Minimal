import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { clearSearchResults, fetchSearchResults, selectSearchResults, selectSearchResultsLoading } from "../../Features/searchResultsSlice/searchResultsSlice";
import PostContainer from "../PostContainer/PostContainer";
import SubredditMenu from "../SubredditMenu/SubredditMenu";


const SearchResults = () => {
    const dispatch = useDispatch();
    const params = useParams();
    useEffect(() => {
        dispatch(fetchSearchResults(params.searchTerm))
        return () => {dispatch(clearSearchResults())}
    }, [params, dispatch])

    const posts = useSelector(selectSearchResults);
    const loading = useSelector(selectSearchResultsLoading);
    const noResults = posts.length === 0 && !loading ? true : false;

    return (
        <main className='main'>
            <SubredditMenu />
            <PostContainer data={posts} loading={loading} noResults={noResults} />
        </main>
    )
};

export default SearchResults;