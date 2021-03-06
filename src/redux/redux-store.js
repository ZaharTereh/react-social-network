import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from './dialogs-reduce';
import profileReducer from './profile-reducer';
import usersReducer from "./users-reducer";
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReduser} from 'redux-form';

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReduser
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;