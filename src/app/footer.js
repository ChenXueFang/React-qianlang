import React from 'react';
import './footer.css'
const Footer = ()=>(
    <div className={"footer_box"}>
        <div className={"footer_con"}>
            {/*上*/}
            <div className={"footer_top"}>
                <div className={"top_left"}>
                    <img src={require('./../img/footer_icon.png')} height={"55px"}/>
                    <p style={{marginLeft:"30px",marginTop:"30px"}}>贵州全域旅游传播平台</p>
                </div>
                <ul className={"top_right"}>
                    <li><a href="#">关于我们</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</li>
                    <li><a href="#">商务合作</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</li>
                    <li><a href="#">广告服务</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</li>
                    <li><a href="#">联系我们</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</li>
                    <li><a href="#">战略伙伴</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</li>
                    <li><a href="#">关于我们</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</li>
                    <li><a href="#">版权声明</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</li>
                    <li><a href="#">免责条款</a>&nbsp;&nbsp;&nbsp;|</li>
                </ul>
            </div>
            {/*下*/}
            <div className={"footer_bot"}>
                <p>Copyright &copy; qsina.cn 贵州卡尔斯信息科技有限公司 版权所有</p>
                <div className={"footer_right"}>
                    <a href="#">微博商学院培训证书</a>
                    <a href="#">互联网新闻信息编辑培训证书 </a>
                    <a href="#">公网安备 52011502000314号</a>
                    <a href="#">统一社会信用代码 ：91520115MA6GQRFF6H &nbsp;&nbsp;&nbsp;黔ICP备18001114号</a>
                </div>
                <div className={"footer_img"}>
                    <div><img src={require("./../img/phone_icon.png")} alt=""/></div>
                    <div><img src={require("./../img/webo.png")} alt=""/></div>
                </div>
            </div>
        </div>
    </div>
)
export default Footer