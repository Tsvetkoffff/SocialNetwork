import React from 'react';
import Post from "./Post/Post";
import s from './Posts.module.css';

const Posts = (props) => {
    let postsElements = props.postsData
    .map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

    let newPostElement = React.createRef();

    let onPostAdd = (event) => {
        props.addPost();
        event.preventDefault();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    };

    return (
        <div className={s.posts}>
            <p>My posts</p>
            <form onSubmit={onPostAdd}>
            <input  type='text'
                    ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText}/>
            <button>Add post</button>
            </form>
            {postsElements}
        </div>
    )
};

export default Posts