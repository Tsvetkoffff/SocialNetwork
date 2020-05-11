import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import asideReducer from "./asideReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";

let reducers = combineReducers({
    profile: profileReducer,
    messagesPage: messagesReducer,
    asideData: asideReducer,
    usersPage: usersReducer,
    authReducer: authReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store