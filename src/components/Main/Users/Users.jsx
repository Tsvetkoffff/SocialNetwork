import React from "react";
import s from './Users.module.css';
import defaultPhoto from '../../../assets/img/default-user-image.png'
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUsersCount(response.data.totalCount);
        })
    };

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    };

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <button onClick={() => this.onPageChanged(p)} className={this.props.currentPage === p && s.currentPage}>{ p }</button>
                })}
            </div>
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