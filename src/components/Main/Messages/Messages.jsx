import React from 'react';
import s from './Messages.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";

const Messages = (props) => {

    let dialogsElements = props.state.dialogsData
        .map(d => <DialogsItem name={d.name} id={d.id} />);

    let messagesElelments = props.state.messagesData
        .map(m => <MessagesItem message={m.message} />);

    let newMessageText = React.createRef();

    let addMessage = () => {
        alert(newMessageText.current.value)
    }

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
                <div className={s.messageAdd}>
                    <input type="text" ref={newMessageText} />
                    <button onClick={addMessage}>Sent</button>
                </div>
            </div>
        </section>
    )
};

export default Messages