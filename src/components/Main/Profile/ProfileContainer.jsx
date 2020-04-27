import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserProfile} from "../../../redux/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId = 7195;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data);
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