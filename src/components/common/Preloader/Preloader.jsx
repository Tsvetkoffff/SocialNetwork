import React from "react";
import preloaderImg from "../../../assets/img/preloader-1s-200px.svg";
import s from "./Preloader.module.css"

let Preloader = (props) => {
    return <img src={preloaderImg} alt="" className={s.preloader}/>
};

export default Preloader