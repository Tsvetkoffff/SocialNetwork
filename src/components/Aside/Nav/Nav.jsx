import React from 'react';
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';


const Nav = (props) => {
    return (
        <ul className={s.nav_list}>
            <li className={s.nav_item}>
                <NavLink to='/Profile' className={s.nav_link} activeClassName={s.active}>
                    Profile
                </NavLink>
            </li>
            <li className={s.nav_item}>
                <NavLink to='/Messages' className={s.nav_link} activeClassName={s.active}>
                    Messages
                </NavLink>
            </li>
            <li className={s.nav_item}>
                <NavLink to='/Users' className={s.nav_link} activeClassName={s.active}>
                    Users
                </NavLink>
            </li>
            <li className={s.nav_item}>
                <NavLink to='/News' className={s.nav_link} activeClassName={s.active}>
                    News
                </NavLink>
            </li>
            <li className={s.nav_item}>
                <NavLink to='/Music' className={s.nav_link} activeClassName={s.active}>
                    Music
                </NavLink>
            </li>
            <li className={s.nav_item}>
                <NavLink to='/Settings' className={s.nav_link} activeClassName={s.active}>
                    Settings
                </NavLink>
            </li>
        </ul>
    )
}

export default Nav