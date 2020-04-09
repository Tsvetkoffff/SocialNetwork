import React from 'react';
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from "../../../redux/messagesReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {

    let dialogsData = props.store.getState().messagesPage.dialogsData,
        messagesData = props.store.getState().messagesPage.messagesData,
        newMessageText = props.store.getState().messagesPage.newMessageText,
        messageTextChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    },
        messageAdd = () => {
        props.store.dispatch(sendMessageActionCreator())
    };

    return <Messages
        dialogsData={dialogsData}
        messagesData={messagesData}
        newMessageText={newMessageText}
        messageTextChange={messageTextChange}
        messageAdd={messageAdd} />
};

export default MessagesContainer