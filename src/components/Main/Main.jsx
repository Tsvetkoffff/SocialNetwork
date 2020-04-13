import React from 'react';
import s from './Main.module.css';
import { Route, Redirect } from "react-router-dom";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import MessagesContainer from "./Messages/MessagesContainer";

const Main = (props) => {
    return (
        <main className={s.main}>
            <Redirect from='/' to='Profile'/>
            <Route path='/Profile' render={() => 
            <Profile />} />
            <Route path='/Messages' render={() => 
            <MessagesContainer />} />
            <Route path='/News' render={News} />
            <Route path='/Music' render={Music} />
            <Route path='/Settings' render={Settings} />
        </main>
    )
};
 
export default Main