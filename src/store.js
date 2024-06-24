import { configureStore } from "@reduxjs/toolkit";
import { likeReducer, myPostReducer } from "./Reducers/Post";
import { allUsersReducer, postOfFollowingReducer, userReducer } from "./Reducers/User";

const store = configureStore({
    reducer: {
        user: userReducer,
        postOfFollowing: postOfFollowingReducer,
        allUsers: allUsersReducer,
        like: likeReducer,
        myPosts: myPostReducer,
    },
});

export default store;
