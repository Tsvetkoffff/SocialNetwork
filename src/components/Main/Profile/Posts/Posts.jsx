import React from 'react';
import Post from "./Post/Post";
import s from './Posts.module.css';

const Posts = (props) => {
    let postsElements = props.postsData
    .map(p => <Post message={p.message} likesCount={p.likesCount} />);
    console.log(props);
    let newPostElement = React.createRef();

    let onPostAdd = () => {
        props.addPost()
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.changePostText(text)
    };

    return (
        <div className={s.posts}>
            <p>My posts</p>
            <input  type='text'
                    ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText}/>
            <button onClick={onPostAdd}>Add post</button>
            {postsElements}
        </div>
    )
};

export default Posts