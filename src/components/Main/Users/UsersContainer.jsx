import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {
    follow, unfollow,
    getUsers
} from "../../../redux/usersReducer";
import {compose} from "redux";
import {
    getCurrentPageSelector, getIsFollowFetchingSelector, getIsLoadingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "../../../utilities/selectors";

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
        users: getUsersSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        pageSize: getPageSizeSelector(state),
        currentPage: getCurrentPageSelector(state),
        isLoading: getIsLoadingSelector(state),
        isFollowFetching: getIsFollowFetchingSelector(state)
    }
};

export default compose(
    connect(mapStateToProps, {follow, unfollow, getUsers})
    )(UsersContainer);