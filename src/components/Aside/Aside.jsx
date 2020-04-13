import React from 'react';
import s from './Aside.module.css';
import Nav from './Nav/Nav';
import FriendsContainer from "./Friends/FriendsContainer";

const Aside = (props) => {
    return (
        <aside className={s.aside}>
            <Nav />
            <FriendsContainer />
        </aside>
    )
};

export default Aside