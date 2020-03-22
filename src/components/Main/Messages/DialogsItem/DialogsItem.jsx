import React from 'react';
import s from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = `/Messages/${props.id}`,
        name = props.name;

    return (
        <div className={s.dialogsItem}>
            <NavLink to={path} className={s.dialogsLink} activeClassName={s.active}>
                {name}
            </NavLink>
        </div>
    )
};

export default DialogsItem