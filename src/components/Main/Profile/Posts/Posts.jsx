import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {

    let postsElements = props.profilePage.postsData
    .map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.profilePage.updateNewPostText(text)
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