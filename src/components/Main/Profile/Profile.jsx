import React from 'react';
import s from './Profile.module.css';
import Description from "./Discription/Description";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <section className={s.profile}>
            <Description userProfile={props.profile.userProfile}
                         status={props.profile.status}
                         updateUserStatus={props.updateUserStatus}/>
            <PostsContainer />
        </section>
    )
};

export default Profile