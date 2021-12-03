import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation} from "react-router-dom";
import { clearPosts, fetchFilteredPosts, selectFilteredPosts, selectFilteredPostsError, selectFilteredPostsLoading } from "../../Features/filterSlice/filterSlice";
import { selectInitialPostsError } from "../../Features/initialPostsSlice/initialPostsSlice";
import FilterMenu from "../FilterMenu/FilterMenu";
import PostContainer from "../PostContainer/PostContainer";
import SubredditMenu from "../SubredditMenu/SubredditMenu";


const FilteredContent = () => {
    const dispatch = useDispatch();
    const params = useLocation()
     useEffect(() => {
         const pathname = params.pathname.substring(1);
         dispatch(fetchFilteredPosts(pathname));
         return () => {
             dispatch(clearPosts());
         }
     }, [dispatch, params.pathname])

     const filteredPosts = useSelector(selectFilteredPosts);
     const loading = useSelector(selectFilteredPostsLoading);
     const error = useSelector(selectInitialPostsError);

    return (
        <main data-testid='content' className='main'>
        <FilterMenu />
        <SubredditMenu />
        <PostContainer data={filteredPosts} loading={loading} />
    </main>
    )
}

export default FilteredContent;