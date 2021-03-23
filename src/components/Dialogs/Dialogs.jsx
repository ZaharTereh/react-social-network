import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import { Redirect } from 'react-router-dom';
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {

    let dialogElements = props.dialogPage.dialogData.map(element => {
        return (<Dialog name={element.name} id={element.id} />);
    });
    let messageElements = props.dialogPage.messageData.map(element => {
        return (<Message message={element.message}/>);
    });



    let addNewMessage = (values) => {
        props.onSendMessageClick(values.newMessageText)
    }


    if(!props.isAuth){
        return <Redirect to={"/login"}/>
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messageElements}
                </div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    );
}

const AddMessageFrom = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newMessageText"} component={"textarea"} placeholder={"Enter your message:"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageFrom);


export default Dialogs;