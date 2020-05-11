import React, {Component} from 'react';
import './App.css';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {initialize} from "./redux/appReducer"
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {

    componentDidMount() {
        this.props.initialize()
    }

    render() {
        if(!this.props.initializeStatus) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <Header/>
                <Aside/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initializeStatus: state.app.initializeStatus
});


export default compose(withRouter, connect(mapStateToProps, {initialize}))(App);
