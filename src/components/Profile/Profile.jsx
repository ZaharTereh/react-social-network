import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'

const Profile = (props) =>{
    return(
        <div>
            <ProfileInfo />
            <MyPosts postData={props.postData}/>
        </div>
    );
}

export default Profile;