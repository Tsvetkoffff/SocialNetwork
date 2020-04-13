import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import asideReducer from "./asideReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    asideData: asideReducer});

let store = createStore(reducers);

window.store = store;

export default store