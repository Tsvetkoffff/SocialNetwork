import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {

    let postsElements = props.posts
    .map(p => <Post message={p.message} likesCount={p.likesCount} />);

    return (
        <div className={s.posts}>
            <p>My posts</p>
            <input type='text'></input>
            <button>Add post</button>
            {postsElements}
        </div>
    )
};

export default Posts