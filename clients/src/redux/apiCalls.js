// 75
import { loginStart, loginSuccess, loginFailure, logOutSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const response = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(response.data));
    } catch (error) {
        dispatch(loginFailure());       
    }
}

export const logOut = async(dispatch) => {
    dispatch(logOutSuccess());
}