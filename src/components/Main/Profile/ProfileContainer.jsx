import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId = 7195;
        profileAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data);
        })
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

export default connect(mapStateToProps,{setUserProfile})(withUrlProfileContainer)