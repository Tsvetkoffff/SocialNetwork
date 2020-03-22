import React from 'react';
import s from './Profile.module.css';
import Discription from "./Discription/Discription";
import Posts from "./Posts/Posts";

// let postsData = [
//     { id: 1, message: 'Post 1', likesCount: 45 },
//     { id: 2, message: 'Post 2', likesCount: 54 },
//     { id: 3, message: 'Post 3', likesCount: 67 }
// ];

const Profile = (props) => {
    return (
        <section className={s.profile}>
            <Discription />
            <Posts posts={props.posts}/>
        </section>
    )
};

export default Profile