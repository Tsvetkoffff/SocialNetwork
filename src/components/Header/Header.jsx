import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <p>This is a social network on React</p>
            <img src="https://ru.reactjs.org/logo-og.png" alt="WebTech"/>
        </header>
    )
}

export default Header