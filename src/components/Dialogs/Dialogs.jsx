import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';


const Dialogs = (props) => {

    let dialogElements = props.dialogData.map(element => {
        return (<Dialog name={element.name} id={element.id} />);
    });

    let messageElements = props.messageData.map(element => {
        return (<Message message={element.message}/>);
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;