import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reduce';
import { Redirect } from 'react-router-dom';


const Dialogs = (props) => {

    let dialogElements = props.dialogPage.dialogData.map(element => {
        return (<Dialog name={element.name} id={element.id} />);
    });
    let messageElements = props.dialogPage.messageData.map(element => {
        return (<Message message={element.message}/>);
    });
    let newMessageText = props.dialogPage.newMessageText;

    let onSendMessageClick = () =>{
        props.onSendMessageClick();
    }

    let updateNewMessageText = (event) =>{
        let newMessageText = event.target.value;
        props.updateNewMessageText(newMessageText);
    }


    if(props.isAuth == false){
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
                    <textarea value={newMessageText} onChange={updateNewMessageText} placeholder="Enter your message:"></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;