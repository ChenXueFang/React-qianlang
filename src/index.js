import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 引入三个组件
import First from './app/first'
import All from './app/all'
import Fast from './app/fast'
import NavBar from './app/nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <NavBar/>
        <Route exact path="/" component = {First}/>
        <Route path="/all" component = {All}/>
        <Route path="/fast" component = {Fast}/>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
