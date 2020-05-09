import React from 'react';
import s from './Main.module.css';
import {Route, Redirect} from "react-router-dom";
import ProfileContainer from "./Profile/ProfileContainer";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import Messages from "./Messages/Messages";
import UsersContainer from "./Users/UsersContainer";
import LoginPage from "./Login/LoginPage";

const Main = (props) => {
    return (
        <main className={s.main}>
            {/*<Redirect from='/' to='Users'/>*/}
            <Route path='/Profile/:userId?' render={() =>
                <ProfileContainer/>}/>
            <Route path='/Messages' render={() =>
                <Messages/>}/>
            <Route path='/Users' render={() =>
                <UsersContainer/>}/>
            <Route path='/News' render={News}/>
            <Route path='/Music' render={Music}/>
            <Route path='/Settings' render={Settings}/>
            <Route path='/Login' render={() =>
                <LoginPage />}/>
        </main>
    )
};

export default Main