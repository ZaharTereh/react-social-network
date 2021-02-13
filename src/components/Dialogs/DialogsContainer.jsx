import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reduce';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapToStateProps = (state) =>{
    return {
        dialogPage : state.dialogPage,
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

// let AuthRedirectDialogComponent = withAuthRedirect(Dialogs);

// let DialogsContainer = connect(mapToStateProps,mapToDispatchProps)(AuthRedirectDialogComponent);

// export default DialogsContainer;

export default compose(
    connect(mapToStateProps,mapToDispatchProps),
    withAuthRedirect
)(Dialogs)