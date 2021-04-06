import React from 'react';
import { connect } from 'react-redux';
import {logoutThunkCreator, setAuthUserDataThunkCreator} from '../../redux/auth-reducer';
import { withRouter } from 'react-router-dom';
import Header from './Header';

class HeaderAPIContainer extends React.Component{

    render(){
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        login : state.auth.login,
        isAuth : state.auth.isAuth
    };
}


let WithRouterHeaderContainer = withRouter(HeaderAPIContainer);

const HeaderContainer = connect(mapStateToProps,
    {logoutThunkCreator}
    )(WithRouterHeaderContainer);

export default HeaderContainer