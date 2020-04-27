import React from 'react';
import Header from "./Header";
import {setUserAuthData} from "../../redux/authReducer";
import {connect} from "react-redux";
import * as axios from "axios";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
            withCredentials: true
        }).then(response => {
            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
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