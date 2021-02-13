import React from 'react';
import Profile from './Profile'
import {getUserProfileThunkCreator} from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileAPIContainer extends React.Component{

    componentDidMount = () => {
        let userId = this.props.match.params.id;
        this.props.getUserProfileThunkCreator(userId);
    }

    render(){
        if(this.props.isAuth == false){
            return <Redirect to={"/login"}/>
        }

        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        userProfile : state.profilePage.userProfile
    };
}

// let AuthRedirectProfileComponent = withAuthRedirect(ProfileAPIContainer);

// let WithRouterProfileContainer = withRouter(AuthRedirectProfileComponent);

// const ProfileContainer = connect(mapStateToProps,{getUserProfileThunkCreator})(WithRouterProfileContainer);

// export default ProfileContainer

export default compose(
    connect(mapStateToProps,{getUserProfileThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileAPIContainer);