import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (id) => dispatch(followAC(id)),
        onUnfollow: (id) => dispatch(unfollowAC(id)),
        setUsers: (users) => dispatch(setUsersAC(users))
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer