import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <p>This is a social network on React</p>
            <div className={s.loginContainer}>
                {
                    props.isAuthSet
                        ? <div>
                        <p> {props.login} </p>
                        <button onClick={props.logout}>Log out</button>
                        </div>
                        : <NavLink to='/login'>Login</NavLink>
                }
                <img src="https://ru.reactjs.org/logo-og.png" alt="WebTech"/>
            </div>
        </header>
    )
};

export default Header