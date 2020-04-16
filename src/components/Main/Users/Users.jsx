import React from "react";
import s from './Users.module.css';
import defaultPhoto from '../../../assets/img/default-user-image.png'
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return <div>
            {this.props.users.map(u => <div key={u.id}>
                <img src={u.photos.small !== null ? u.photos.small : defaultPhoto} alt="Avatar"
                     className={s.photo}/>
                {
                    u.followed
                        ? <button onClick={() => {
                            this.props.onUnfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.onFollow(u.id)
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
    }
}

export default Users