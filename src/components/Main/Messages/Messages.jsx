import React from 'react';
import s from './Messages.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/messagesReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const Messages = (props) => {

    let dialogsElements = props.dialogsData
        .map(d => <DialogsItem name={d.name} key={d.id} />);

    let messagesElements = props.messagesData
        .map(m => <MessagesItem message={m.message} key={m.id} />);

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

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        messageTextChange: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        messageAdd: () => {
            dispatch(sendMessageActionCreator())
        }
    }
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Messages);