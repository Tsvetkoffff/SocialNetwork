import React from "react";
import s from './Users.module.css';
import defaultPhoto from '../../../assets/img/default-user-image.png'

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <button onClick={() => props.onPageChanged(p)} className={props.currentPage === p && s.currentPage}>{ p }</button>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <img src={u.photos.small !== null ? u.photos.small : defaultPhoto} alt="Avatar"
                 className={s.photo}/>
            {
                u.followed
                    ? <button onClick={() => {
                        props.onUnfollow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.onFollow(u.id)
                    }}>Follow</button>
            }
            <div>
                <p> {u.name} </p>
                <p> {u.status} </p>
            </div>
            <div>
                <p> u.location.cityName </p>
                <p> u.location.country </p>
            </div>
        </div>)
        }
    </div>
};

export default Users