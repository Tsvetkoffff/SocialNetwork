import React from "react";
import s from './Users.module.css';

const Users = (props) => {
    return (
        <section>
            {
                props.users.map(
                    u => <div key={u.userId}>
                        <div>
                            <img src={u.photoUrl} alt="Avatar" className={s.photo}/>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        props.onUnfollow(u.userId)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.onFollow(u.userId)
                                    }}>Follow</button>
                            }
                        </div>
                        <div>
                            <p> {u.userName} </p>
                            <p> {u.userStatus} </p>
                        </div>
                        <div>
                            <p> {u.userLocation.cityName} </p>
                            <p> {u.userLocation.country} </p>
                        </div>
                    </div>
                )
            }
        </section>
    )
};

export default Users