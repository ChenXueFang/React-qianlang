import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css'
const NavBar = ()=>(
    <div>
        <div>
            <img src={} alt=""/>
            <NavLink exact to='/' className="blue" target="_blank" rel="noopener noreferrer">首页</NavLink>
            <NavLink to='/all' activeClassName='active' target="_blank" rel="noopener noreferrer">全域旅游</NavLink>
            <NavLink to='/fast' activeClassName='active' target="_blank" rel="noopener noreferrer">快旅资讯</NavLink>
            <NavLink exact to='/all' className="blue">旅游扶贫</NavLink>
            <NavLink to='/all' activeClassName='active'>旅游专题</NavLink>
            <NavLink to='/fast' activeClassName='active'>黔货出山</NavLink>
            <NavLink exact to='/all' className="blue">大美黔图</NavLink>
            <NavLink to='/all' activeClassName='active'>目的地</NavLink>
            <NavLink to='/fast' activeClassName='active'>自由玩</NavLink>
        </div>
        <div>

        </div>
    </div>
)
export default NavBar