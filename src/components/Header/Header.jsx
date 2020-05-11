import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";

const Header = (props) => {
    return (
        <header className={s.header}>
            <p>This is a social network on React</p>
            <div className={s.loginContainer}>
                {
                    props.isAuthSet
                        ? <div>
                        <p> {props.login} </p>
                        <button onClick={props.logout}>Log out</button>
                        </div>
                        : <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>
    )
};

let mapStateToProps = (state) => ({
    login: state.authReducer.login,
    isAuthSet: state.authReducer.isAuthSet
});

export default connect(mapStateToProps, {logout})(Header)