import {userAPI} from '../../src/api/api';

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';
let SELECT_PAGE = 'SET-SELECT-PAGE';
let SET_USER_COUNT = 'SET-USER-COUNT';
let TOOGLE_IS_FETCHING = 'TOOGLE-IS-FETCHING';
let TOOGLE_FOLLOWING_IN_PROGRESS = 'TOOGLE-FOLLOWING-IN-PROGRESS';

let initialState = {
    users : [
        {id:"1", photos:{small:"https://uznayvse.ru/images/stories/uzn_1379065615.jpg"},
         name:"Sasha", followed:true, status:'I Sasha', location:{city:'Minsk', country:'Belarus'}},
        {id:"2", photos:{small:"https://n1s2.starhit.ru/62/01/ee/6201ee27060ea9a3ed9273c7f3c3c1f6/480x497_0_05b7fbf09ee1e66007c5dd69db2d2706@480x497_0xac120003_7472114441591986839.jpg"}, 
        name:"Pasha", followed:false, status:'I Pasha', location:{city:'Borisov', country:'Belarus'}},
        {id:"3", photos:{small:"https://the-most-beautiful.ru/sites/default/files/5125fc85d3c0d.jpg"}, 
        name:"Masha", followed:false, status:'I Masha', location:{city:'Slonim', country:'Belarus'}},
        {id:"4", photos:{small:"https://tntmusic.ru/media/content/article/2020-08-07_17-40-42__1d94b6b6-d8d5-11ea-9963-e7bb315c2d29.jpg"}, 
        name:"Karina", followed:true, status:'I Karina', location:{city:'Minsk', country:'Belarus'}},
    ],
    pageSize : 5,
    userCount : 0,
    selectedPage : 1,
    isFetching : false,
    followingInProgress:[]
};

const usersReducer = (state = initialState,action) => {
    switch(action.type){
        case FOLLOW:{
            return {
                ...state,
                users : state.users.map(el => {
                    if(el.id === action.userId){
                        el.followed = true;
                    }
                    return el;
                })
            };
        }
        case UNFOLLOW:{
            return {
                ...state,
                users : state.users.map(el => {
                    if(el.id === action.userId){
                        el.followed = false;
                    }
                    return el;
                })
            };
        }
        case SET_USERS:{
            return {
                ...state,
                //users : [...state.users, ...action.users]
                users : [...action.users]
            };
        }
        case SELECT_PAGE:{
            return {
                ...state,
                selectedPage : action.page
            };
        }
        case SET_USER_COUNT:{
            return {
                ...state,
                userCount : action.userCount
            };
        }
        case TOOGLE_IS_FETCHING:{
            return {
                ...state,
                isFetching : action.isFetching
            };
        }
        case TOOGLE_FOLLOWING_IN_PROGRESS:{
            return {
                ...state,
                followingInProgress : action.isFetching 
                ? [...state.followingInProgress,action.userId]
                : state.followingInProgress.filter(id => id != action.userId)
            };
        }
        default:{
            return state;
        }
      
    }
}

export const follow = (userId) =>{
    return {type:FOLLOW,userId};
}

export const unfollow = (userId) =>{
    return {type:UNFOLLOW,userId};
}

export const setUsers = (users) =>{
    console.log(users)
    return {type:SET_USERS,users};
}

export const selectPage = (page) =>{
    return {type:SELECT_PAGE,page};
}

export const setUserCount = (userCount) =>{
    return {type:SET_USER_COUNT,userCount};
}

export const toogleIsFetching = (isFetching) =>{
    return {type:TOOGLE_IS_FETCHING,isFetching};
}

export const toogleFollowingInProgress = (isFetching,userId) =>{
    return {type:TOOGLE_FOLLOWING_IN_PROGRESS,isFetching,userId};
}


export const getUserThunkCreator = () => {
    return (dispatch) => {
            userAPI.getAllUsers().then(data => {
                dispatch(setUsers(data.items));
                dispatch(setUserCount(data.totalCount));
        });
    }
}

export const changeSelectedPageThunkCreator = (page,pageSize) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        dispatch(selectPage(page));
        userAPI.getUsersBySize(page,pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(toogleIsFetching(false));
        });
    }
}

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowingInProgress(true,userId));
        userAPI.follow(userId).then(response => {
                if(response.data.resultCode == 0){
                    dispatch(follow(userId));
                }
                dispatch(toogleFollowingInProgress(false,userId));
            }); 
    }
}

export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowingInProgress(true,userId));
        userAPI.unfollow(userId).then(response => {
                if(response.data.resultCode == 0){
                    dispatch(unfollow(userId));
                }
                dispatch(toogleFollowingInProgress(false,userId));
            }); 
    }
}

export default usersReducer;