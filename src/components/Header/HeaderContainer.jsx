import React from 'react';
import Header from "./Header";
import {getAuthUserData, logout} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    login: state.authReducer.login,
    isAuthSet: state.authReducer.isAuthSet
});

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)
