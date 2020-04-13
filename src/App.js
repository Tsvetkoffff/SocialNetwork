import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Aside from "./components/Aside/Aside";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header />
            <Aside />
            <Main />
            <Footer />
        </div>
    )
};

export default App;