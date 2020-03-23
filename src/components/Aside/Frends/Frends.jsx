import React from 'react'
import s from './Frends.module.css'

const Frends = (props) => {

    let frendsElement = props.state
        .map(f => (
            <li>
                <img
                    src={f.avatar}
                    alt="Avatar" className={s.avatar} />
                <span>{f.name}</span>
            </li>
        ))

    return (
        <ul>
            {frendsElement}
        </ul>
    )
}

export default Frends