import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:id?' render={()=><ProfileContainer store={props.store}/>}/>
          <Route path='/dialogs' render={()=><DialogsContainer store={props.store}/>}/>
          <Route path='/users' render={()=><UsersContainer store={props.store}/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
