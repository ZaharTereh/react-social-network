import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import {initializedThunkCreator} from './redux/app-reducer';
import {connect} from "react-redux";
import Preloader from "./components/commons/Preloader/Preloader";

class App extends React.Component {

  componentDidMount = () => {
    this.props.initializedThunkCreator();
  }

  render() {
    if(!this.props.initialized){
      return <Preloader/>
    }
    return (
        <BrowserRouter>
          <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
              <Route path='/profile/:id?' render={() => <ProfileContainer store={this.props.store}/>}/>
              <Route path='/dialogs' render={() => <DialogsContainer store={this.props.store}/>}/>
              <Route path='/users' render={() => <UsersContainer store={this.props.store}/>}/>
              <Route path='/login' render={() => <Login store={this.props.store}/>}/>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized : state.app.initialized
  }
}

export default connect(mapStateToProps,{initializedThunkCreator})(App);
