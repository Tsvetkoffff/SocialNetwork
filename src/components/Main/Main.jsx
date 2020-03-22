import React from 'react';
import s from './Main.module.css';
import { Route, Redirect } from "react-router-dom";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const Main = () => {
    return (
            <main className={s.main}>
                {/*<Redirect from='/' to='Profile'/>*/}
                <Route path='/Profile' component={Profile}/>
                <Route path='/Messages' component={Messages}/>
                <Route path='/News' component={News}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Settings' component={Settings}/>
            </main>
    )
};

export default Main