import React from "react";
import s from './Users.module.css';
import defaultPhoto from '../../../assets/img/default-user-image.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <button key={p} onClick={() => props.onPageChanged(p)}
                               className={props.currentPage === p ? s.currentPage : ''}>{p}</button>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small !== null ? u.photos.small : defaultPhoto} alt="Avatar"
                     className={s.photo}/>
            </NavLink>
            {
                u.followed
                    ? <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true, headers: {"API-KEY": "b6717ad8-8479-454a-ad2a-268671917c9f"}}).
                        then(response => {
                            if(response.data.resultCode === 0) {
                                props.unfollow(u.id)
                            }
                        })
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true, headers: {"API-KEY": "b6717ad8-8479-454a-ad2a-268671917c9f"}}).
                        then(response => {
                            if(response.data.resultCode === 0) {
                                props.follow(u.id)
                            }
                        })
                    }}>Follow</button>
            }
            <div>
                <p> {u.name} </p>
                <p> {u.status} </p>
                <p> {u.uniqueUrlName} </p>
            </div>
        </div>)
        }
    </div>
};

export default Users