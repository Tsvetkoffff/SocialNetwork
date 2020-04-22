import {connect} from "react-redux";
import {followAC, setUsersCountAC, setCurrentPageAC, setUsersAC, unfollowAC} from "../../../redux/usersReducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

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
        return <Users   totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged}
                        currentPage={this.props.currentPage}
                        onUnfollow={this.props.onUnfollow}
                        onFollow={this.props.onFollow}
                        users={this.props.users}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (id) => dispatch(followAC(id)),
        onUnfollow: (id) => dispatch(unfollowAC(id)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
        setUsersCount: (count) => dispatch(setUsersCountAC(count))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);