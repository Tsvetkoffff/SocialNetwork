import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src="https://vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg" alt="Avatar" />
            <div> {props.message} </div>
            <div> Like {props.likesCount} </div>
        </div>
    )
};

export default Post