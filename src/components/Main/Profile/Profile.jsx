import React from 'react';
import s from './Profile.module.css';
import Discription from "./Discription/Discription";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <section className={s.profile}>
            <Discription />
            <Posts  profilePage={props.profilePage} 
                    addPost={props.addPost} />
        </section>
    )
};

export default Profile