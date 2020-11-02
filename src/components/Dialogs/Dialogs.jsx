import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';


const Dialog = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}


const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name="Sasha" id="1" />
                <Dialog name="Victor" id="2" />
                <Dialog name="Karina" id="3" />
                <Dialog name="Nikita" id="4" />
                <Dialog name="Max" id="5" />
            </div>
            <div className={s.messages}>
                <Message message="Hello"/>
                <Message message="Привет"/>
                <Message message="Здравствуйте"/>
                <Message message="Yo"/>
            </div>
        </div>
    );
}

export default Dialogs;