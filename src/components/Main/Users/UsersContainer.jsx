import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {
    follow,
    isFollowFetchingToggle,
    setCurrentPage,
    setIsLoading,
    setUsers,
    setUsersCount,
    unfollow
} from "../../../redux/usersReducer";
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
            <Users {...this.props} onPageChanged={this.onPageChanged}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        isFollowFetching: state.usersPage.isFollowFetching
    }
};

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setUsersCount, setIsLoading, isFollowFetchingToggle
    })(UsersContainer);