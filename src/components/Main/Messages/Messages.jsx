import React from 'react';
import s from './Messages.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";

const Messages = () => {
    return (
        <section className={s.messages}>
            <header>Dialogs</header>
            <div className={s.dialogsWrapper}>
                <div className={s.dialogsList}>
                    <DialogsItem name='Bob' id='1' />
                    <DialogsItem name='Sara' id='2' />
                    <DialogsItem name='Jon' id='3' />
                    <DialogsItem name='Ben' id='4' />
                </div>
                <div className={s.messagesList}>
                    <MessagesItem message='Fuck you' />
                    <MessagesItem message='Bla bla bla' />
                </div>
            </div>
        </section>
    )
};

export default Messages