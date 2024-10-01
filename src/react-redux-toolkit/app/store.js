import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/post/postSlice";
import usersReducer from "../features/users/usersSlice";

const store = configureStore({
    reducer: {
        posts: postReducer,
        users: usersReducer
    }
})

export default store