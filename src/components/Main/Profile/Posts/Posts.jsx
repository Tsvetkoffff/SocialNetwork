import React from 'react';
import Post from "./Post/Post";
import s from './Posts.module.css';
import {Field, Form} from "react-final-form";

const Posts = (props) => {
    let postsElements = props.postsData
        .map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

    let onPostAdd = (values) => {
        props.addPost(values)
    };

    return (
        <div className={s.posts}>
            <h1>My posts</h1>
            <Form onSubmit={onPostAdd} newPostText={props.newPostText}>
                {props => {
                    return (
                        <form onSubmit={props.handleSubmit}>
                            <Field name='newPostText'
                                   component='input'
                                   type='text'
                                   placeholder={props.newPostText}/>
                            <button type='submit'>Add post</button>
                        </form>
                    )
                }
                }
            </Form>
            {postsElements}
        </div>
    )
};

export default Posts