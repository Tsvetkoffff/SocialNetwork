import React from 'react';
import s from './MessagesItem.module.css';

const MessagesItem = props =>
    <div className={s.messagesItem}>{props.message}</div>;



export default MessagesItem