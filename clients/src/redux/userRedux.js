// 70
import { createSlice } from "@reduxjs/toolkit";

// 71
const userSlice = createSlice({
    "name": "user",
    initialState: {
       currentUser: null,
       isFetching: false,
       error: false
    },
    reducers: {
        loginStart: (state) => {
           state.isFetching = true;
        },
        loginSuccess: (state, action) => {
           state.isFetching = false;
           state.currentUser = action.payload;
        },
        loginFailure: (state) => {
           state.isFetching = false;
           state.error = true;
        },
        logOutSuccess: (state) => {
           state.currentUser = null;
           state.isFetching = false;
           state.error = false;
           localStorage.clear();
        }
    }
})

// 72
export const {loginStart, loginSuccess, loginFailure, logOutSuccess} = userSlice.actions;
export default userSlice.reducer;