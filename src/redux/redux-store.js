import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer from './dialogs-reduce';
import profileReducer from './profile-reducer';
import usersReducer from "./users-reducer";
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReduser} from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer,
    app:appReducer,
    form:formReduser
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window._store_ = store;

export default store;