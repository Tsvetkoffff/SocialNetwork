import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <p>This is a social network on React</p>
            <div className={s.loginContainer}>
                {
                    props.isAuthSet
                        ? <p> {props.login} </p>
                        : <button>Login</button>
                }
                <img src="https://ru.reactjs.org/logo-og.png" alt="WebTech"/>
            </div>
        </header>
    )
};

export default Header