import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuthSet: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuthSet) => ({type: SET_AUTH_USER_DATA, data: {id, email, login, isAuthSet}});

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.getAuthUserData().then(data => {
            if(data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
};

export const authorizeUser = (userInput) => {
    return (dispatch) => {
        authAPI.loginAuthData(userInput).then(data => {
            if(data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
    }
};

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if(data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
};

export default authReducer;