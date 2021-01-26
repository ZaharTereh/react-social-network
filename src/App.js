import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={()=><Profile store={props.store}/>}/>
          <Route path='/dialogs' render={()=><DialogsContainer store={props.store}/>}/>
          <Route path='/users' render={()=><UsersContainer store={props.store}/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
