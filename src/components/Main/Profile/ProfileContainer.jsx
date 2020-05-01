import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId = 7195;
        this.props.getProfile(userId);
    };

    render() {
       return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

export default compose(
    connect(mapStateToProps,{getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)