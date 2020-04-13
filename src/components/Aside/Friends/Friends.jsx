import React from 'react'
import s from './Friends.module.css'

const Friends = (props) => {

    let friendsElement = props.friendsData
        .map(f => (
            <li>
                <img
                    src={f.avatar}
                    alt="Avatar" className={s.avatar} />
                <span>{f.name}</span>
            </li>
        ));

    return (
        <ul>
            {friendsElement}
        </ul>
    )
};

export default Friends