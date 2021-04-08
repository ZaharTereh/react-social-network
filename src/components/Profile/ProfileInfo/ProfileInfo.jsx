import React from 'react';
import Preloader from '../../commons/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusWithHook from "./ProfileStatus/ProfileStatusWithHook";

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
                <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;