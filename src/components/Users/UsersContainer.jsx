import React from 'react';
import {
    getUserThunkCreator,changeSelectedPageThunkCreator,
    unfollowThunkCreator,followThunkCreator
} from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../commons/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getSelectedPage,
    getUsers,
    getUsersCount
} from "../../redux/selectors/user-selectors";



class UsersAPIComponent extends React.Component{

    componentDidMount = () => {
        this.props.getUserThunkCreator();
    }

    changeSelectedPage = (page,pageSize) => {
        this.props.changeSelectedPageThunkCreator(page,pageSize);
    }

    follow = (userId) => {
        this.props.followThunkCreator(userId);
    }

    unfollow = (userId) => {
        this.props.unfollowThunkCreator(userId);
    }

    render = ()=>{
        return <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users 
                    userCount={this.props.userCount}
                    pageSize={this.props.pageSize}
                    selectedPage={this.props.selectedPage}
                    users={this.props.users}
                    followingInProgress={this.props.followingInProgress}
                    
                    changeSelectedPage={this.changeSelectedPage}
                    follow={this.follow}
                    unfollow={this.unfollow}
                />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users : getUsers(state),
        pageSize : getPageSize(state),
        userCount : getUsersCount(state),
        selectedPage : getSelectedPage(state),
        isFetching : getIsFetching(state),
        followingInProgress : getFollowingInProgress(state)
    }
};

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        selectPage : (page) => {
            dispatch(selectPageAC(page));
        },
        setUserCount : (userCount) => {
            dispatch(setUserCountAC(userCount));
        },
        toogleIsFetching : (isFetching) => {
            dispatch(toogleIsFetchingAC(isFetching));
        }
    }
};*/


//  const UsersContainer = connect(mapStateToProps,
//     {getUserThunkCreator,changeSelectedPageThunkCreator,unfollowThunkCreator,followThunkCreator})
//     (UsersAPIComponent);
 
//  export default UsersContainer;

 export default compose(
    connect(mapStateToProps,
        {getUserThunkCreator,changeSelectedPageThunkCreator,unfollowThunkCreator,followThunkCreator}),
    withAuthRedirect
        )(UsersAPIComponent)
