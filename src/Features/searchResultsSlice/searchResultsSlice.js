import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/API";

const initialState = {
    searchResults: [],
    loading: false,
    error: false
}


export const fetchSearchResults = createAsyncThunk('searchResultsSlice/fetchSearchResults', async (searchTerm) => {
    const response = await API.getSearchResults(searchTerm);
    return response; 
})

const options = {
    name: 'searchResultsSlice',
    initialState: initialState,
    reducers: {
        clearSearchResults: state => state.searchResults = []
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSearchResults.pending, (state, action) => {
            state.loading = true;
            state.error = false;
        })
        builder.addCase(fetchSearchResults.fulfilled, (state, action) => {
            state.searchResults = action.payload;
            state.loading = false;
            state.error = false;
        })
        builder.addCase(fetchSearchResults.rejected, (state, action) => {
            console.log('rejected')
            state.loading = false;
            state.error = true;
        })
    }

};

const searchResultsSlice = createSlice(options);

export const selectSearchResults = state => state.searchResults.searchResults;

export default searchResultsSlice.reducer;
export const { clearSearchResults } = searchResultsSlice.actions;
