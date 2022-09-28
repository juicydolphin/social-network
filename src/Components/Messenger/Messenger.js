import React from 'react';
import styles from './Messenger.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom"
import {Field, reduxForm} from "redux-form";

const Messenger = (props) => {

    let dialogsElements = props.messengerPage.dialogs.map(d => <Dialog name={d.name} id={d.id}/>)
    let messagesElements = props.messengerPage.messages.map(m => <Message message={m.message}/>)

    let addNewMessage = (formData) => {
        props.sendMessage(formData.newMessageBody)
    }
    if (props.isAuth === false) return <Navigate to={'/login'}/>

    return (
        <div className={styles.messenger}>
            <div className={styles.messengerDialogs}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>

        </div>
    );
};

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message...'}/></div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm ({form: 'messengerAddMessageForm'})(AddMessageForm)
export default Messenger;