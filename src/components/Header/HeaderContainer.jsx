import React from 'react';
import { connect } from 'react-redux';
import {logoutThunkCreator, setAuthUserDataThunkCreator} from '../../redux/auth-reducer';
import { withRouter } from 'react-router-dom';
import Header from './Header';

class HeaderAPIContainer extends React.Component{

    componentDidMount = () => {
        this.props.setAuthUserDataThunkCreator();
    }

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
    {setAuthUserDataThunkCreator,logoutThunkCreator}
    )(WithRouterHeaderContainer);

export default HeaderContainer