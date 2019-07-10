import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 引入三个组件
import First from './app/first'
import All from './app/all'
import All_1 from './app/all_1'
import All_2 from './app/all_2'
import Fast from './app/fast'
import NavBar from './app/nav'
import Footer from './app/footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <NavBar/>
        <Route exact path="/" component = {First}/>
        <Route path="/all" component = {All}/>
        <Route path="/fast" component = {Fast}/>
        <Route path="/all/all_1" component = {All_1}/>
        <Route path="/all/all_2" component = {All_2}/>
        <Footer/>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
