import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import asideReducer from "./asideReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    asideData: asideReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store