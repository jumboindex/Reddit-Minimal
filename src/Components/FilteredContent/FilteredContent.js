import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation} from "react-router-dom";
import { fetchFilteredPosts, selectFilteredPosts } from "../../Features/filterSlice/filterSlice";
import FilterMenu from "../FilterMenu/FilterMenu";
import PostContainer from "../PostContainer/PostContainer";
import SubredditMenu from "../SubredditMenu/SubredditMenu";


const FilteredContent = () => {
    const dispatch = useDispatch();
    const params = useLocation()
     useEffect(() => {
         const pathname = params.pathname.substring(1);
         dispatch(fetchFilteredPosts(pathname));
     }, [dispatch, params.pathname])

     const filteredPosts = useSelector(selectFilteredPosts)

    return (
        <main data-testid='content' className='main'>
        <FilterMenu />
        <SubredditMenu />
        <PostContainer data={filteredPosts} />
    </main>
    )
}

export default FilteredContent;