import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) =>{
    return(
        <div>
            <ProfileInfo userProfile={props.userProfile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;