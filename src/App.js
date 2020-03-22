import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
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