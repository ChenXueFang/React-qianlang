import React from 'react';
import './first.css';
import './all.css';
import { Pagination } from 'antd';
// import Appp from './page'
import {Carousel, Radio, Tabs, Timeline} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
export default class Fast extends React.Component{
    // 轮播方向
    // state = {
    //     dotPosition: 'right',
    // };
    render(){
        return(
            <div className={"box"}>
                {/*con*/}
                <div className={"con"}>
                    {/*banner轮播*/}
                    <div className={"bannerLun"} dots={false}>
                        <Carousel autoplay>
                            <div>
                                <img src={require('./../img/banner4.jpg')} />
                            </div>
                            <div>
                                <img src={require('./../img/all_banner3.jpg')} />
                            </div>
                            <div>
                                <img src={require('./../img/banner3.jpg')} />
                            </div>
                        </Carousel>
                    </div>
                    {/*banner轮播*/}
                    {/*main*/}
                    <div className={"main"}>
                        {/*左大边*/}
                        <div className={"bigLeft"}>
                            {/*新闻条例*/}
                            <div className={"tab_box"}>
                                <p className={"new_title"}>全域旅游</p>
                                <div className={"tab_ul"}>
                                    <div className={"tab_li tab1"}>
                                        <img src={require('./../img/tab3.png')} alt=""/>
                                        <div className={"tab_zi"}>
                                            <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                            <p>新蒲的“特”，首先当然非文化莫属。</p>
                                        </div>
                                    </div>
                                    <div className={"tab_li"}>
                                        <img src={require('./../img/tab5.png')} alt=""/>
                                        <div className={"tab_zi"}>
                                            <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                            <p>新蒲的“特”，首先当然非文化莫属。</p>
                                        </div>
                                    </div>
                                    <div className={"tab_li"}>
                                        <img src={require('./../img/tab1.png')} alt=""/>
                                        <div className={"tab_zi"}>
                                            <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                            <p>新蒲的“特”，首先当然非文化莫属。</p>
                                        </div>
                                    </div>
                                    <div className={"tab_li"}>
                                        <img src={require('./../img/tab3.png')} alt=""/>
                                        <div className={"tab_zi"}>
                                            <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                            <p>新蒲的“特”，首先当然非文化莫属。</p>
                                        </div>
                                    </div>
                                    <div className={"tab_li"}>
                                        <img src={require('./../img/tab5.png')} alt=""/>
                                        <div className={"tab_zi"}>
                                            <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                            <p>新蒲的“特”，首先当然非文化莫属。</p>
                                        </div>
                                    </div>
                                    <div className={"tab_li"}>
                                        <img src={require('./../img/tab3.png')} alt=""/>
                                        <div className={"tab_zi"}>
                                            <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                            <p>新蒲的“特”，首先当然非文化莫属。</p>
                                        </div>
                                    </div>
                                    <div className={"tab_li"}>
                                        <img src={require('./../img/tab3.png')} alt=""/>
                                        <div className={"tab_zi"}>
                                            <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                            <p>新蒲的“特”，首先当然非文化莫属。</p>
                                        </div>
                                    </div>
                                    <div className={"tab_li"}>
                                        <img src={require('./../img/tab1.png')} alt=""/>
                                        <div className={"tab_zi"}>
                                            <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                            <p>新蒲的“特”，首先当然非文化莫属。</p>
                                        </div>
                                    </div>
                                </div>
                                {/* 分页 */}
                                <div className={"page"}>
                                    <Pagination onChange="{onChange}" defaultCurrent={6} total={500} />
                                </div>
                                {/* 分页 */}
                            </div>
                            {/*新闻条例*/}
                        </div>
                        {/*右大边*/}
                        <div className={"bigRight"}>
                            {/*资讯排行榜*/}
                            <div className={"zi_gun_box"}>
                                <p>资讯排行榜</p>
                                <ul className={"refer"}>
                                    <li><span>1</span><a href="#">2019年我在等一个人陪我游贵州，会是你吗？</a></li>
                                    <li><span>2</span><a href="#">你的青春，“99”无悔！南江大峡谷2019高考考生福利来袭</a></li>
                                    <li><span>3</span><a href="#">六月去哪玩？解锁遵义，感受魅力无限的山水人文秘境</a></li>
                                    <li><span>4</span><a href="#">贵州龙里大草原，邀您来一次轻松惬意放飞自我的旅行！</a></li>
                                    <li><span>5</span><a href="#">六月去哪玩？来贵州避暑，三条线路带你玩转黔南！</a></li>
                                </ul>
                            </div>
                            {/*右边轮播*/}
                            <div className={"right_lun"}>
                                <Carousel autoplay>
                                    <div>
                                        <img src={require('./../img/ziyouwan.jpg')} />
                                    </div>
                                    <div>
                                        <img src={require('./../img/rLun1.jpg')} />
                                    </div>
                                    <div>
                                        <img src={require('./../img/rLun.jpg')} />
                                    </div>
                                </Carousel>
                            </div>
                            {/*热门标签*/}
                            <div className={"zi_gun_box"}>
                                <p>热门标签</p>
                                <div className={"btn"}>
                                    <a href="#">百里杜鹃普底景区</a>
                                    <a href="#">苗族祭牛节</a>
                                    <a href="#">黄平飞云崖</a>
                                    <a href="#">杉木湖景区</a>
                                    <a href="#">高华村</a>
                                    <a href="#">从江县翠里瑶族壮族乡</a>
                                    <a href="#">百里杜鹃普底景区</a>
                                    <a href="#">苗族祭牛节</a>
                                    <a href="#">黄平飞云崖</a>
                                    <a href="#">杉木湖景区</a>
                                    <a href="#">高华村</a>
                                    <a href="#">从江县翠里瑶族壮族乡</a>
                                    <a href="#">百里杜鹃普底景区</a>
                                    <a href="#">苗族祭牛节</a>
                                    <a href="#">黄平飞云崖</a>
                                    <a href="#">杉木湖景区</a>
                                    <a href="#">高华村</a>
                                    <a href="#">从江县翠里瑶族壮族乡</a>
                                    <a href="#">百里杜鹃普底景区</a>
                                    <a href="#">苗族祭牛节</a>
                                    <a href="#">黄平飞云崖</a>
                                </div>
                            </div>
                            <img src={require('./../img/tou.jpg')} />
                        </div>
                        {/*右大边*/}
                    </div>
                    {/*main*/}
                </div>
                {/*con*/}
                {/* 侧边固定导航 */}
                <ul className={"right_din"}>
                    <li>
                        {/* qq群聊天 */}
                        <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=dce6d001aa3ea8736205cd071b6eb0e04c5fd9f7999c18140a6564b68cb60789"><img src={require('./../img/qq.png')} /></a>
                    </li>
                    <li><img src={require('./../img/webo.png')} /></li>
                    <li><img src={require('./../img/we_chat.png')} /></li>
                    <li onClick={this.handleScrollTop}><img src={require('./../img/back_top.png')} /></li>
                </ul>
                {/* 侧边固定导航 */}
            </div>
        )
    }
}