import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../../redux/profileReducer";
import {withRouter} from "react-router-dom";


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

let withUrlProfileContainer = withRouter(ProfileContainer);

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

export default connect(mapStateToProps,{getProfile})(withUrlProfileContainer)