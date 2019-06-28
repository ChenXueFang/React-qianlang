import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css'
const NavBar = ()=>(
    <div className='nav_box'>
        <div className={"nav_con"}>
            <div className={"nav_left"}>
                <div><img src={require('./../img/nav_logo.png')}/></div>
                {/*target="_blank" rel="noopener noreferrer"*/}
                <NavLink className='a' exact to='/'>首页</NavLink>
                <NavLink className='a' to='/all' activeClassName='active'>全域旅游</NavLink>
                <NavLink className='a' to='/fast' activeClassName='active'>快旅资讯</NavLink>
                <NavLink className='a'>旅游扶贫</NavLink>
                <NavLink className='a'>旅游专题</NavLink>
                <NavLink className='a'>黔货出山</NavLink>
                <NavLink className='a'>大美黔图</NavLink>
                <NavLink className='a'>目的地</NavLink>
                <NavLink className='a'>自游玩</NavLink>
            </div>
            <div className={"nav_right"}>
                <img src={require('./../img/search_icon.png')} />
                <NavLink className='a' style={{marginLeft:"20px"}}>请求报道</NavLink>
            </div>
        </div>
    </div>
)
export default NavBar