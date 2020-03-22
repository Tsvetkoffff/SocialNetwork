import React from 'react';
import s from './Messages.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";

const Messages = (props) => {

    let dialogsElements = props.dialogs
        .map(d => <DialogsItem name={d.name} id={d.id} />);

    let messagesElelments = props.messages
        .map(m => <MessagesItem message={m.message} />);

    return (
        <section className={s.messages}>
            <header>Dialogs</header>
            <div className={s.dialogsWrapper}>
                <div className={s.dialogsList}>
                    {dialogsElements}
                </div>
                <div className={s.messagesList}>
                    {messagesElelments}
                </div>
            </div>
        </section>
    )
};

export default Messages