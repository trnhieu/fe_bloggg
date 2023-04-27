import { configureStore } from "@reduxjs/toolkit";
import { darkModeSlice } from "../redux/darkmode.slice";
import { postSlice } from "../redux/post.slice";
import { userSlice } from "../redux/user.slice";

export const storePost = configureStore({
    reducer: {
        posts: postSlice,
        users: userSlice,
        darkMode: darkModeSlice,
    },
});
