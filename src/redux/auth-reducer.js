import { authAPI } from "../api/api";

let SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

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
                ...action.data,
                isAuth : true
            }
        }
                
        default:{
            return state;
        }
            
    }
}

export const setAuthUserData = (userId,email,login) =>{
    return {type:SET_AUTH_USER_DATA,data:{userId,email,login}};
}

export const setAuthUserDataThunkCreator = () => {
    return (dispatch) => {
        authAPI.me().then(response => {
            if(response.data.resultCode === 0){
                let id = response.data.data.id;
                let email = response.data.data.email;
                let login = response.data.data.login;
                dispatch(setAuthUserData(id,email,login));
            }
        });
    }
}

export default authReducer;