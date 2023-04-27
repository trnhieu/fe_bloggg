import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "darkMode",
    initialState: {
        isdarkModeOn: false,
    },
    reducers: {
        toggledarkMode: (state, { payload }) => {
            return {
                ...state,
                isdarkModeOn: payload,
            };
        },
    },
});

export const darkModeAction = { ...slice.actions };
export const darkModeSlice = slice.reducer;
