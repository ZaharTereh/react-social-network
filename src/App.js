import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={()=><Profile postData={props.postData}/>}/>
          <Route path='/dialogs' render={()=><Dialogs messageData={props.messageData} dialogData={props.dialogData}/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
