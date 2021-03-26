import React from 'react';
import Preloader from '../../commons/Preloader/Preloader'
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
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;