import React from 'react';
import s from './Aside.module.css';
import Nav from './Nav/Nav';
import Frends from './Frends/Frends';

const Aside = (props) => {
    return (
        <aside className={s.aside}>
            <Nav />
            <Frends state={props.state.frendsData} />
        </aside>
    )
};

export default Aside