import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = state => ({
    isAuthSet: state.authReducer.isAuthSet
});

let withAuthRedirect = Component => {
    let withAuthRedirectComponent = props => {
        // if(!props.isAuthSet) {
        //     return <Redirect to='/Login' />
        // }
        return <Component {...props} />
    };
    return connect(mapStateToProps)(withAuthRedirectComponent)
};

export default withAuthRedirect