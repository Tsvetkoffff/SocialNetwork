import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Aside from "./components/Aside/Aside";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Aside />
            <Main />
            <Footer />
        </div>
    )
};

export default App;