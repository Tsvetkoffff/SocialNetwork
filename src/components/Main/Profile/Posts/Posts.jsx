import React from 'react';
import Post from "./Post/Post";
import s from './Posts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";

const Posts = (props) => {

    let postsElements = props.profilePage.postsData
    .map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.posts}>
            <p>My posts</p>
            <input  type='text' ref={newPostElement} 
                    onChange={onPostChange} value={props.profilePage.newPostText}/>
            <button onClick={addPost}>Add post</button>
            {postsElements}
        </div>
    )
};

export default Posts