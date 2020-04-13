import React from 'react';
import Messages from "./Messages";
import {connect} from "react-redux";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/messagesReducer";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        messageTextChange: (text) => {dispatch(updateNewMessageTextActionCreator(text))},
        messageAdd: () => {dispatch(sendMessageActionCreator())}
    }
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer