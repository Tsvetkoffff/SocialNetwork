import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {
    follow, unfollow,
    getUsers
} from "../../../redux/usersReducer";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect"

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    };

    onPageChanged = (currentPage) => {
        this.props.getUsers(this.props.pageSize, currentPage);
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

export default compose(
    connect(mapStateToProps, {follow, unfollow, getUsers}),
    withAuthRedirect
    )(UsersContainer);