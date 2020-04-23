import React from 'react';
import s from './Main.module.css';
import {Route, Redirect} from "react-router-dom";
import ProfileContainer from "./Profile/ProfileContainer";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import MessagesContainer from "./Messages/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";

const Main = (props) => {
    return (
        <main className={s.main}>
            <Redirect from='/' to='Users'/>
            <Route path='/Profile' render={() =>
                <ProfileContainer/>}/>
            <Route path='/Messages' render={() =>
                <MessagesContainer/>}/>
            <Route path='/Users' render={() =>
                <UsersContainer/>}/>
            <Route path='/News' render={News}/>
            <Route path='/Music' render={Music}/>
            <Route path='/Settings' render={Settings}/>
        </main>
    )
};

export default Main