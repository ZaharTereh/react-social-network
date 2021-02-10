import React from 'react';
import Preloader from '../../Preloader/Preloader'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) =>{

    if(!props.userProfile){
        return <Preloader/>
    }
    return(
        <div>
            <div>Main picture</div>
            <div>
                <img src={props.userProfile.photos.large}/>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;