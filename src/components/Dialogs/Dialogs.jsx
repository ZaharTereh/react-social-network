import React, {useState} from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import { Redirect } from 'react-router-dom';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../util/validators/validators";
import {Textarea} from "../commons/FormControls/FormControls";

const maxLength50 = maxLengthCreator(50);

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

    let [range,setRange] = useState(0);
    let changeRange = (e) => {
        setRange(e.currentTarget.value);
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
                <div>
                    <input type={"range"} min={"0"} max={"100"}
                           step={"1"} value={range} onChange={changeRange}/>
                    {range}
                </div>
            </div>
        </div>
    );
}

const AddMessageFrom = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newMessageText"} component={Textarea} placeholder={"Enter your message:"}
                validate={[required,maxLength50]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageFrom);


export default Dialogs;