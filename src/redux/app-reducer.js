import {setAuthUserDataThunkCreator} from "./auth-reducer";

let SET_INITIALIZED = 'SET-INITIALIZED';

let initialState = {
    initialized : false
};

const appReducer = (state = initialState,action) => {
    switch(action.type){
        case SET_INITIALIZED:{
            return {
                ...state,
                initialized : true
            }
        }
        default:{
            return state;
        }
            
    }
}

export const setInitialized = () => {
    return {type:SET_INITIALIZED};
}

export const initializedThunkCreator = () => {
    return (dispatch) => {
        let promise = dispatch(setAuthUserDataThunkCreator());

        Promise.all([promise])
            .then(() => {
                dispatch(setInitialized())
            })
    }
}

export default appReducer;