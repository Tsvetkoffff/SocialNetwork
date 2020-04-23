import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserProfile} from "../../../redux/profileReducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/15`).then(response => {
            this.props.setUserProfile(response.data);
        })
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

export default connect(mapStateToProps,{setUserProfile})(ProfileContainer)