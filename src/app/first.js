import React from 'react';
import './first.css'
import './all.css'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import { DatePicker } from 'antd';
import { Carousel, Radio } from 'antd';
import { Tabs } from 'antd';
import { Timeline } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
// tab切换
const { TabPane } = Tabs;
// 设置背景图片
const bgGround={
    display:'inline-block',
    height: '129px',
    width:'100%',
    background: `url(${require("./../img/bg.png")})`,
    backgroundSize:"100% 100%"   //设置背景图片大小
}
export default class First extends React.Component{
    // 轮播方向
    state = {
        dotPosition: 'right',
    };
    render(){
        const { dotPosition } = this.state;
        return(
            <div className={"box"}>
                <div style={bgGround}></div>
                {/*con*/}
                <div className={"con"}>
                    {/*banner轮播*/}
                    <div className={"bannerLun"}>
                        <Carousel dotPosition={dotPosition} autoplay>
                            <div>
                                <img src={require('./../img/banner1.jpg')} />
                            </div>
                            <div>
                                <img src={require('./../img/banner2.jpg')} />
                            </div>
                            <div>
                                <img src={require('./../img/banner3.jpg')} />
                            </div>
                            <div>
                                <img src={require('./../img/banner4.jpg')} />
                            </div>
                        </Carousel>
                    </div>
                    {/*banner轮播*/}
                    {/*main*/}
                    <div className={"main"}>
                        {/*左大边*/}
                        <div className={"bigLeft"}>
                            {/*左边轮播和两张图片*/}
                            <div className={"lunImg_box"}>
                                {/*左边轮播*/}
                                <div className={"fistLun"}>
                                    <Carousel dotPosition={dotPosition} autoplay>
                                        <div>
                                            <img src={require('./../img/firstLun1.jpg')} />
                                        </div>
                                        <div>
                                            <img src={require('./../img/firstLun2.png')} />
                                        </div>
                                        <div>
                                            <img src={require('./../img/firstLun3.png')} />
                                        </div>
                                        <div>
                                            <img src={require('./../img/firstLun4.png')} />
                                        </div>
                                    </Carousel>
                                </div>
                                {/*右边两张图*/}
                                <div className={"twoImg"}>
                                    <img src={require('./../img/two1.jpg')}/>
                                    <img src={require('./../img/two2.png')}/>
                                </div>
                            </div>
                            {/*左边轮播和两张图片*/}
                            {/*tab切换*/}
                            <div className={"tab_box"}>
                                <Tabs defaultActiveKey="1">
                                    <TabPane className={"tab_ul"} tab="最新资讯" key="1">
                                        <div className={"tab_li tab1"}>
                                            <img src={require('./../img/tab1.png')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab3.png')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab1.png')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <img src={require("./../img/tab9.jpg")} style={{width:"100%"}}/>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab1.png')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab3.png')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab1.png')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab3.png')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane className={"tab_ul"} tab="全域旅游" key="2">
                                        <div className={"tab_li tab1"}>
                                            <img src={require('./../img/tab2.jpg')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab4.jpg')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab2.jpg')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <img src={require("./../img/tab9.jpg")} style={{width:"100%"}}/>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab4.jpg')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab4.jpg')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab4.jpg')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab4.jpg')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane className={"tab_ul"} tab="旅游扶贫" key="3">
                                        <div className={"tab_li tab1"}>
                                            <img src={require('./../img/tab5.png')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab6.jpg')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab5.png')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <img src={require("./../img/tab9.jpg")} style={{width:"100%"}}/>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab4.jpg')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab6.jpg')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab4.jpg')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab4.jpg')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane className={"tab_ul"} tab="大美黔图" key="4">
                                        <div className={"tab_li tab1"}>
                                            <img src={require('./../img/tab7.png')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab8.jpg')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab2.jpg')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <img src={require("./../img/tab9.jpg")} style={{width:"100%"}}/>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab8.jpg')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab7.png')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab4.jpg')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"tab_li"}>
                                            <img src={require('./../img/tab7.png')} alt=""/>
                                            <div className={"tab_zi"}>
                                                <h3>全域旅游看贵州：新蒲之特——沙滩文化</h3>
                                                <p>新蒲的“特”，首先当然非文化莫属。</p>
                                                <div className={"tab_but_box"}>
                                                    <button>全域旅游</button>
                                                    <span>06-27</span>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                </Tabs>
                            </div>
                            {/*tab切换*/}
                        </div>
                        {/*右大边*/}
                        <div className={"bigRight"}>
                            {/*文字滚动*/}
                            <div className={"zi_gun_box"}>
                                <p>最热资讯</p>
                                <div className={"zi_gun"}>
                                    <Timeline>
                                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                                        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                                        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                                        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                                        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                                        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                                        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                                    </Timeline>
                                </div>
                            </div>
                            {/*文字滚动*/}
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
                                <Carousel dotPosition={dotPosition} autoplay>
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
                    {/*目的地,友情链接*/}
                    <div className={"footer_bai"}>
                        {/*目的地*/}
                        <div className={"target"}>
                            <p>目的地</p>
                            <div className={"target_img"}>
                                <a href="#"><img src={require('./../img/di1.jpg')} alt=""/></a>
                                <a href="#"><img src={require('./../img/di2.jpg')} alt=""/></a>
                                <a href="#"><img src={require('./../img/di3.jpg')} alt=""/></a>
                                <a href="#"><img src={require('./../img/di4.jpg')} alt=""/></a>
                                <a href="#"><img src={require('./../img/di5.jpg')} alt=""/></a>
                                <a href="#"><img src={require('./../img/di6.jpg')} alt=""/></a>
                                <a href="#"><img src={require('./../img/di7.jpg')} alt=""/></a>
                                <a href="#"><img src={require('./../img/di8.jpg')} alt=""/></a>
                                <a href="#"><img src={require('./../img/di9.jpg')} alt=""/></a>
                            </div>
                        </div>
                        {/*友情链接*/}
                        <div className={"target"}>
                            <p>友情链接</p>
                            <div className={"target_zi"}>
                                <a href="#">自由玩&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">多彩贵州吧&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">贵阳网&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">游贵州&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">六盘水市文化广电旅游局&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">安顺市文化广电旅游局&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">铜仁市文体广电局&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">遵义同城会&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">印象黔南&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">自由玩&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">多彩贵州吧&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">贵阳网&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">游贵州&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">六盘水市文化广电旅游局&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">安顺市文化广电旅游局&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">铜仁市文体广电局&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">遵义同城会&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">印象黔南&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">铜仁市文体广电局&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">遵义同城会&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">印象黔南&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">自由玩&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">多彩贵州吧&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">贵阳网&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">游贵州&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">六盘水市文化广电旅游局&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">安顺市文化广电旅游局&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">铜仁市文体广电局&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">遵义同城会&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                                <a href="#">印象黔南&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                            </div>
                        </div>
                    </div>
                    {/*目的地,友情链接*/}
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