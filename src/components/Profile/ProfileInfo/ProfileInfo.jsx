import React from 'react';
import Preloader from '../../Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) =>{

    if(!props.userProfile){
        return <Preloader/>
    }
    return(
        <div>
            <div>
                <img src={props.userProfile.photos.large}/>
            </div>
            <div>
                <ProfileStatus status={"Hello"}/>
            </div>
        </div>
    );
}

export default ProfileInfo;