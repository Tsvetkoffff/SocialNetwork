import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, updateUserStatus} from "../../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        // if(!userId) userId = 15;
        if(!userId) userId = this.props.userId;
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    };

    render() {
       return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        userId: state.authReducer.id
    }
};

export default compose(
    connect(mapStateToProps,{getProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)