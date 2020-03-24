import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {

    let postsElements = props.state
    .map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostText = React.createRef();

    let addPost = () => {
        let text = newPostText.current.value;
        props.addPost(text)
    }

    return (
        <div className={s.posts}>
            <p>My posts</p>
            <input type='text' ref={newPostText}></input>
            <button onClick={addPost}>Add post</button>
            {postsElements}
        </div>
    )
};

export default Posts