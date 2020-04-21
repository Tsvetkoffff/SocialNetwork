import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersCountAC, setCurrentPageAC, setUsersAC, unfollowAC} from "../../../redux/usersReducer";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer