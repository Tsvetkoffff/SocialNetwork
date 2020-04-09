import React from 'react';
import s from './Messages.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";

const Messages = (props) => {

    let dialogsElements = props.dialogsData
        .map(d => <DialogsItem name={d.name} id={d.id} />);

    let messagesElements = props.messagesData
        .map(m => <MessagesItem message={m.message} />);

    let onMessageTextChange = (e) => {
        let text = e.target.value;
        props.messageTextChange(text)
    };

    let onMessageAdd = () => {
        props.messageAdd()
    };

    return (
        <section className={s.messages}>
            <header>Dialogs</header>
            <div className={s.dialogsWrapper}>
                <div className={s.dialogsList}>
                    {dialogsElements}
                </div>
                <div className={s.messagesList}>
                    <div className={s.messagesElements}>{messagesElements}</div>
                    <div className={s.messageAdd}>
                        <input  type="text" 
                                value={props.newMessageText}
                                onChange={onMessageTextChange} />
                        <button onClick={onMessageAdd}>Sent</button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Messages