import React from 'react';
import s from './Profile.module.css';
import Discription from "./Discription/Discription";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <section className={s.profile}>
            <Discription />
            <PostsContainer />
        </section>
    )
};

export default Profile