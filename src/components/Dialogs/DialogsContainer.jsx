import React from 'react';
import { addMessageActionCreator} from '../../redux/dialogs-reduce';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) =>{
    return {
        dialogPage : state.dialogPage,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        onSendMessageClick : (messageText) => {
            let addMessageAction = addMessageActionCreator(messageText);
            dispatch(addMessageAction);
        }
    }
}

// let AuthRedirectDialogComponent = withAuthRedirect(Dialogs);

// let DialogsContainer = connect(mapToStateProps,mapToDispatchProps)(AuthRedirectDialogComponent);

// export default DialogsContainer;

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)