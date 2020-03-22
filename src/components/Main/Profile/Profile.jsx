import React from 'react';
import s from './Profile.module.css';
import Discription from "./Discription/Discription";
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <section className={s.profile}>
            <Discription />
            <Posts />
        </section>
    )
};

export default Profile