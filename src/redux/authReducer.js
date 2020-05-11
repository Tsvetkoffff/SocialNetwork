import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuthSet: false,
    errorMessage: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.errorMessage
            };
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuthSet) => ({type: SET_AUTH_USER_DATA, data: {id, email, login, isAuthSet}});
export const setErrorMessage = (errorMessage) => ({type: SET_ERROR_MESSAGE, errorMessage});

export const getAuthUserData = () => {
    return (dispatch) => {
        return authAPI.getAuthUserData().then(data => {
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
            } else {
                dispatch(setErrorMessage(data.messages[0]))
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