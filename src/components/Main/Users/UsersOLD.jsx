import React from "react";
import s from './Users.module.css';
import * as axios from 'axios';
import defaultPhoto from '../../../assets/img/default-user-image.png'

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        })
    }

    return (<section>
            {
                props.users.map(u => <div key={u.id}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : defaultPhoto} alt="Avatar"
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
                        </div>
                        <div>
                            <p> {u.name} </p>
                            <p> {u.status} </p>
                        </div>
                        <div>
                            <p> Ghotam </p>
                            <p> Earth </p>
                        </div>
                    </div>
                )
            }
        </section>)
};

export default Users