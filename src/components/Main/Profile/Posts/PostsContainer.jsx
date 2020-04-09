import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import Posts from "./Posts";

const PostsContainer = (props) => {

    let postsData = props.store.getState().profilePage.postsData;
    let newPostText = props.store.getState().profilePage.newPostText;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    };

    let changePostText = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    };

    return <Posts
        addPost={addPost}
        changePostText={changePostText}
        postsData={postsData}
        newPostText={newPostText}/>

};

export default PostsContainer