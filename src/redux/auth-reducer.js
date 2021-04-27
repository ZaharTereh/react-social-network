import { authAPI } from "../api/api";
import {stopSubmit} from "redux-form";

let SET_AUTH_USER_DATA = 'auth/SET-AUTH-USER-DATA';

let initialState = {
    userId : null,
    email : null,
    login : null,
    isAuth :false
};

const authReducer = (state = initialState,action) => {
    switch(action.type){
        case SET_AUTH_USER_DATA:{
            return {
                ...state,
                ...action.data
            }
        }
                
        default:{
            return state;
        }
            
    }
}

export const setAuthUserData = (userId,email,login,isAuth) =>{
    return {type:SET_AUTH_USER_DATA,data:{userId,email,login,isAuth}};
}

export const setAuthUserDataThunkCreator = () => {
    return async (dispatch) => {
        let response = await authAPI.me();
        if (response.data.resultCode === 0) {
            let id = response.data.data.id;
            let email = response.data.data.email;
            let login = response.data.data.login;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}

export const loginThunkCreator = (email,password,rememberMe) => {
    return async (dispatch) => {
        let response = await authAPI.login(email,password,rememberMe);
        if(response.data.resultCode === 0){
            dispatch(setAuthUserDataThunkCreator());
        }else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit("login",{_error : message}));
        }
    }
}

export const logoutThunkCreator = () => {
    return async (dispatch) => {
        let response = await authAPI.logout();
        if(response.data.resultCode === 0){
            dispatch(setAuthUserData(null,null,null,false));
        }
    }
}

export default authReducer;