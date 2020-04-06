import React from 'react';
import s from './Messages.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from "../../../redux/state";

const Messages = (props) => {

    let dialogsElements = props.messagesPage.dialogsData
        .map(d => <DialogsItem name={d.name} id={d.id} />);

    let messagesElelments = props.messagesPage.messagesData
        .map(m => <MessagesItem message={m.message} />);

    let onMessageTextChange = (e) => {
        let text = e.target.value
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    let addMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    return (
        <section className={s.messages}>
            <header>Dialogs</header>
            <div className={s.dialogsWrapper}>
                <div className={s.dialogsList}>
                    {dialogsElements}
                </div>
                <div className={s.messagesList}>
                    <div className={s.messagesElelments}>{messagesElelments}</div>
                    <div className={s.messageAdd}>
                        <input  type="text" 
                                value={props.messagesPage.newMessageText}
                                onChange={onMessageTextChange} />
                        <button onClick={addMessage}>Sent</button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Messages