import {createSelector} from "reselect";

export const getUsersSuperSelector = createSelector(getUsers,(users) => {
    return users.filter(el => el.equals("user"));
    //сложный селектор для примера
    //он принимает колбэк простого селектора и колбэк той функции, которую будет исполнять при вызове
    //параметр users - это то, что нам вернет getUsers (колбэк, к-й передается 1-м параметром)
});

export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getUsersCount = (state) => {
    return state.usersPage.userCount;
}

export const getSelectedPage = (state) => {
    return state.usersPage.selectedPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}