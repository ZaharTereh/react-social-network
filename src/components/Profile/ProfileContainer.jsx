import React from 'react';
import Profile from './Profile'
import {getUserProfileThunkCreator,getStatusProfileThunkCreator,updateStatusProfileThunkCreator} from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileAPIContainer extends React.Component{

    componentDidMount = () => {
        let userId = this.props.match.params.id;
        if(!userId){
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfileThunkCreator(userId);
        this.props.getStatusProfileThunkCreator(userId);
    }

    render(){
        if(this.props.isAuth === false){
            return <Redirect to={"/login"}/>
        }

        return (
            <Profile userProfile={this.props.userProfile} status={this.props.status} updateStatus={this.props.updateStatusProfileThunkCreator} />
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        userProfile : state.profilePage.userProfile,
        status : state.profilePage.status,
        authorizedUserId : state.auth.userId
    };
}

// let AuthRedirectProfileComponent = withAuthRedirect(ProfileAPIContainer);

// let WithRouterProfileContainer = withRouter(AuthRedirectProfileComponent);

// const ProfileContainer = connect(mapStateToProps,{getUserProfileThunkCreator})(WithRouterProfileContainer);

// export default ProfileContainer

export default compose(
    connect(mapStateToProps,{getUserProfileThunkCreator,getStatusProfileThunkCreator,updateStatusProfileThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileAPIContainer);