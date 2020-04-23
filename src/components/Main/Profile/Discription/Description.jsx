import React from 'react';
import s from './Discription.module.css';
import Preloader from "../../../common/Preloader/Preloader";

const Description = (props) => {

    if(!props.userProfile) {
        return <Preloader/>
    }

    return (
        <div className={s.persen}>
            <img src={props.userProfile.photos.large} alt="Avatar" className="ava" />
            <p className={s.name}>{props.userProfile.fullName}</p>
        </div>
    )
};

export default Description