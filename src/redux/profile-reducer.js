import { userAPI } from "../api/api";


let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    newPostText : "Привет",
    postData : [
        {id:1,text:"Hello", image:"https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg",likes:2},
        {id:2,text:"Привет", image:"https://pbs.twimg.com/profile_images/793021684064419840/RjEjM6z5_400x400.jpg",likes:4},
        {id:3,text:"Здравствуй", image:"https://strana.ua/img/article/2625/70_main.jpeg",likes:1}
    ],
    userProfile : null
};

const profileReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_POST:{
            let newPost = {
                id:4,
                text:state.newPostText,
                image:"https://proprikol.ru/wp-content/uploads/2020/04/kartinki-dlya-vajbera-na-avu-3.jpg",
                likes:0
            };
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';  
            return stateCopy;  
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE:{
            return {...state, userProfile : action.userProfile}
        }
        default:{
            return state;
        }
    }
}

export const addPostActionCreator = () =>{
    return {type:ADD_POST};
}

export const updateNewPostTextActionCreator = (text) =>{
    return {type:UPDATE_NEW_POST_TEXT,newText:text};
}

export const setUserProfile = (userProfile) =>{
    return {type:SET_USER_PROFILE,userProfile};
}

export const getUserProfileThunkCreator = (userId) =>{
    return (dispatch) => {
        if(!userId){
            userId = 2;
        }
        userAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}

export default profileReducer;