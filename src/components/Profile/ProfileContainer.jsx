import React from 'react';
import Profile from './Profile'
import {getUserProfileThunkCreator} from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class ProfileAPIContainer extends React.Component{

    componentDidMount = () => {
        let userId = this.props.match.params.id;
        this.props.getUserProfileThunkCreator(userId);
    }

    render(){
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) =>{
    return {userProfile : state.profilePage.userProfile};
}


let WithRouterProfileContainer = withRouter(ProfileAPIContainer);

const ProfileContainer = connect(mapStateToProps,{getUserProfileThunkCreator})(WithRouterProfileContainer);

export default ProfileContainer