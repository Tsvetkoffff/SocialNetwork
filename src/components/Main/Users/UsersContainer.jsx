import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {follow, setCurrentPage, setIsLoading, setUsers, setUsersCount, unfollow} from "../../../redux/usersReducer";
import {usersAPI} from "../../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsLoading(true);
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
            this.props.setIsLoading(false);
            this.props.setUsers(data.items);
            this.props.setUsersCount(data.totalCount);
        })
    };

    onPageChanged = (currentPage) => {
        this.props.setIsLoading(true);
        this.props.setCurrentPage(currentPage);
        usersAPI.getUsers(this.props.pageSize, currentPage).then(data => {
            this.props.setIsLoading(false);
            this.props.setUsers(data.items);
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