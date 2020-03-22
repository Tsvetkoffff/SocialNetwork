import React from 'react';
import s from './Discription.module.css';

const Discription = () => {
    return (
            <div className={s.persen}>
                <img src="https://vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg" alt="Avatar" className="ava"/>
                <p className={s.name}>User Name</p>
            </div>
    )
};

export default Discription