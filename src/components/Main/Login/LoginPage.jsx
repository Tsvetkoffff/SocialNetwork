import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {authorizeUser} from "../../../redux/authReducer";
import ProfileContainer from "../Profile/ProfileContainer";

const LoginPage = props => {
    return props.isAuthSet
        ? <ProfileContainer/>
        : <>
            <h1>Login</h1>
            <LoginForm authorizeUser={props.authorizeUser} errorMessage={props.errorMessage} />
        </>
};

let mapStateToProps = state => (
    {
        isAuthSet: state.authReducer.isAuthSet,
        errorMessage: state.authReducer.errorMessage
    }
);


export default connect(mapStateToProps, {authorizeUser})(LoginPage);