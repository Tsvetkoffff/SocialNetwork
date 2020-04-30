import React from "react";
import s from './Users.module.css';
import defaultPhoto from '../../../assets/img/default-user-image.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/api";
import {isFollowFetchingToggle} from "../../../redux/usersReducer";

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
                    ? <button disabled={props.isFollowFetching.some(id => id === u.id)}
                              onClick={() => {
                                  props.isFollowFetchingToggle(true, u.id);
                                  usersAPI.unFollowUser(u.id).then(data => {
                                      if (data.resultCode === 0) {
                                          props.unfollow(u.id)
                                      }
                                  props.isFollowFetchingToggle(false, u.id);
                                  })
                              }}>UnFollow</button>
                    : <button disabled={props.isFollowFetching.some(id => id === u.id)}
                              onClick={() => {
                                  props.isFollowFetchingToggle(true, u.id);
                                  usersAPI.followUser(u.id).then(data => {
                                      if (data.resultCode === 0) {
                                          props.follow(u.id)
                                      }
                                  props.isFollowFetchingToggle(false, u.id);
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