import React from 'react';
import s from './Discription.module.css';
import defaultPhoto from '../../../../assets/img/default-user-image.png'
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatusWithHooks"

const Description = (props) => {

    if(!props.userProfile) {
        return <Preloader/>
    }

    return (
        <div className={s.person}>
            <img src={props.userProfile.photos.large !== null ? props.userProfile.photos.large : defaultPhoto } alt="Avatar" className="ava" />
            <p className={s.name}>{props.userProfile.fullName}</p>
            <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
        </div>
    )
};

export default Description