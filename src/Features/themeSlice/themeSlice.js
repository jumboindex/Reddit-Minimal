// probably overkill for managing thememe, however we already have a Redux store configured!

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: '',
}

const options = {
    name: 'themeSlice',
    initialState: initialState,
    reducers: {
        addTheme: (state, action) => {state.theme = action.payload}
    }
};

const themeSlice = createSlice(options);

export const selectTheme = state => state.theme.theme;

export default themeSlice.reducer;
export const { addTheme } = themeSlice.actions;

