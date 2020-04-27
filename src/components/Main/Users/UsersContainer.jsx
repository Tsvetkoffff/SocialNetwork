import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {follow, setCurrentPage, setIsLoading, setUsers, setUsersCount, unfollow} from "../../../redux/usersReducer";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`, {withCredentials: true}).then(response => {
            this.props.setIsLoading(false);
            this.props.setUsers(response.data.items);
            this.props.setUsersCount(response.data.totalCount);
        })
    };

    onPageChanged = (currentPage) => {
        this.props.setIsLoading(true);
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`, {withCredentials: true}).then(response => {
            this.props.setIsLoading(false);
            this.props.setUsers(response.data.items);
        })
    };

    render() {
        return <>
            {this.props.isLoading ? <Preloader/> : null}
            <Users   totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize}
                     onPageChanged={this.onPageChanged}
                     currentPage={this.props.currentPage}
                     unfollow={this.props.unfollow}
                     follow={this.props.follow}
                     users={this.props.users}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
};

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setUsersCount, setIsLoading
    })(UsersContainer);