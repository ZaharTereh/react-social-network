import { profileAPI, userAPI } from "../api/api";


let ADD_POST = 'profile/ADD-POST';
let SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
let SET_STATUS = 'profile/SET-STATUS';
let UPDATE_STATUS = 'profile/UPDATE-STATUS';
let DELETE_POST = 'profile/DELETE-POST';


let initialState = {
    postData : [
        {id:1,text:"Hello", image:"https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg",likes:2},
        {id:2,text:"Привет", image:"https://pbs.twimg.com/profile_images/793021684064419840/RjEjM6z5_400x400.jpg",likes:4},
        {id:3,text:"Здравствуй", image:"https://strana.ua/img/article/2625/70_main.jpeg",likes:1}
    ],
    userProfile : null,
    status : ""
};

const profileReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_POST:{
            return {
                ...state,
                postData: [...state.postData,{
                    id:4,
                    text:action.newPostText,
                    image:"https://proprikol.ru/wp-content/uploads/2020/04/kartinki-dlya-vajbera-na-avu-3.jpg",
                    likes:0
                }]
            };
        }
        case SET_USER_PROFILE:{
            return {...state, userProfile : action.userProfile}
        }
        case SET_STATUS:{
            return {...state, status : action.status}
        }
        case UPDATE_STATUS:{
            return {...state, status : action.status}
        }
        case DELETE_POST:{
            return {...state, postData: state.postData.filter(element => element.id !== action.id)
            }
        }
        default:{
            return state;
        }
    }
}

export const addPostActionCreator = (newPostText) =>{
    return {type:ADD_POST,newPostText};
}

export const setUserProfile = (userProfile) =>{
    return {type:SET_USER_PROFILE,userProfile};
}

export const setStatus = (status) =>{
    return {type:SET_STATUS,status};
}

export const updateStatus = (status) =>{
    return {type:UPDATE_STATUS,status};
}

export const deletePost = (id) =>{
    return {type:DELETE_POST,id};
}


export const getUserProfileThunkCreator = (userId) =>{
    return async (dispatch) => {
        let response = await userAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
    }
}

export const getStatusProfileThunkCreator = (userId) =>{
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
    }
}

export const updateStatusProfileThunkCreator = (status) =>{
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if(response.data.resultCode === 0){
            dispatch(setStatus(status));
        }
    }
}


export default profileReducer;