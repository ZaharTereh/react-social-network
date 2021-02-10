import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reduce';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapToStateProps = (state) =>{
    return {
        dialogPage : state.dialogPage,
        isAuth : state.auth.isAuth
    }
}

let mapToDispatchProps = (dispatch) =>{
    return {
        onSendMessageClick : () => {
            let addMessageAction = addMessageActionCreator();
            dispatch(addMessageAction);
        },
        updateNewMessageText : (newMessageText) => {
            let updateNewMessageTextAction = updateNewMessageTextActionCreator(newMessageText);
            dispatch(updateNewMessageTextAction);
        }
    }
}

let DialogsContainer = connect(mapToStateProps,mapToDispatchProps)(Dialogs);

export default DialogsContainer;