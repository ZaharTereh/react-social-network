import React from 'react';
import {followAC,unfollowAC,setUsersAC, selectPageAC, setUserCountAC, toogleIsFetchingAC} from '../../redux/users-reducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import loadingPage from '../../assets/images/loading.gif';

class UsersAPIComponent extends React.Component{

    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUserCount(response.data.totalCount);
            });
    }

    changeSelectedPage = (page) => {
        this.props.toogleIsFetching(true);
        this.props.selectPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toogleIsFetching(false);
            });
    }

    render = ()=>{
        return <>
                {this.props.isFetching ? <img src={loadingPage}/> : null}
                <Users 
                    userCount={this.props.userCount}
                    pageSize={this.props.pageSize}
                    selectedPage={this.props.selectedPage}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    changeSelectedPage={this.changeSelectedPage}
                />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users : state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        userCount : state.usersPage.userCount,
        selectedPage : state.usersPage.selectedPage,
        isFetching : state.usersPage.isFetching
    }
};

let mapDispatchToProps = (dispatch) => {
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
};

 const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersAPIComponent);
 
 export default UsersContainer;
