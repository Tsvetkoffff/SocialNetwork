import React from 'react';
import s from './Profile.module.css';
import Discription from "./Discription/Discription";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <section className={s.profile}>
            <Discription />
            <Posts  postsData={props.profilePage.postsData} 
                    addPost={props.addPost}
                    newPostText={props.profilePage.newPostText}
                    updateNewPostText={props.updateNewPostText} />
        </section>
    )
};

export default Profile