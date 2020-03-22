import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={s.posts}>
            <p>My posts</p>
            <input type='text'></input>
            <button>Add post</button>
            <Post message='Hi'/>
            <Post message='Yo'/>
        </div>
    )
};

export default Posts