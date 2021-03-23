import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


let mapToStateProps = (state) =>{
    return {
        postData : state.profilePage.postData,
        newPostText : state.profilePage.newPostText
    }
}

let mapToDispatchProps = (dispatch) =>{
    return {
        addPost : (newPostText) => {
            let action = addPostActionCreator(newPostText);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapToStateProps,mapToDispatchProps)(MyPosts);

export default MyPostsContainer;