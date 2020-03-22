import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

let postsData = [
    { id: 1, message: 'Post 1', likesCount: 45 },
    { id: 2, message: 'Post 2', likesCount: 54 },
    { id: 3, message: 'Post 3', likesCount: 67 }
];

let dialogsData = [
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Sara' },
    { id: 3, name: 'Jon' },
    { id: 4, name: 'Ben' }
];

let messagesData = [
    { id: 1, message: 'Fuck you' },
    { id: 2, message: 'Bla bla bla' },
    { id: 3, message: 'Yo' }
];

ReactDOM.render(
    <BrowserRouter>
        <App 
        posts={postsData}
        dialogs={dialogsData}
        messages={messagesData} />
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();