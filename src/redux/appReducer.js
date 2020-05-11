import {getAuthUserData} from "./authReducer";

const SET_INITIALIZE_STATUS = 'SET_INITIALIZE_STATUS';

let initialState = {
    initializeStatus: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZE_STATUS:
            return {
                ...state,
                initializeStatus: true
            };
        default:
            return state;
    }
};

const setInitializeStatus = () => ({type: SET_INITIALIZE_STATUS});

export const initialize = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => dispatch(setInitializeStatus()))
};

export default appReducer;