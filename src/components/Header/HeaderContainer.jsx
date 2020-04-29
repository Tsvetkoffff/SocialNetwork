import React from 'react';
import Header from "./Header";
import {setUserAuthData} from "../../redux/authReducer";
import {connect} from "react-redux";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.getAuthUserInfo().then(data => {
            if(data.resultCode === 0) {
                let {id, email, login} = data.data;
                this.props.setUserAuthData(id, email, login)
            }
        })
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

export default connect(mapStateToProps, {setUserAuthData})(HeaderContainer)