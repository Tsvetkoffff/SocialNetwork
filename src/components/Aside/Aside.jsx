import React from 'react';
import s from './Aside.module.css';
import Nav from './Nav/Nav';
import Friends from './Friends/Friends';

const Aside = (props) => {
    return (
        <aside className={s.aside}>
            <Nav />
            <Friends state={props.state.friendsData} />
        </aside>
    )
};

export default Aside