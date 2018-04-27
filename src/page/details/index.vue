<template>
    <div class="body" ref="center">
        <headTit tit="" link="购物车" name="shop"></headTit>
        <div class="topbg"></div>
        <div class="center" id="cent">
            <div class="top">
                <img src="http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg" alt="" />
                <div class="info">
                    <div class="name">美好一天早餐店</div>
                    <div class="grade">
                        <div class="stars">
                            <i class="iconfont icon-xing_f"></i> 
                            <i class="iconfont icon-xing_f"></i> 
                            <i class="iconfont icon-xing_l"></i> 
                            <i class="iconfont icon-xing_l"></i> 
                            <i class="iconfont icon-xing_l"></i> 
                        </div>
                    </div>
                    <div class="site">北京市王府井大街</div>
                </div>
            </div>
            <ul class="cont">
                <li>
                    <div class="img"><img src="http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg" alt="" /></div>
                    <div class="content">
                        <div class="name">小笼包</div>
                        <div class="deat">好吃好吃好吃好吃。。。</div>
                        <div class="site">
                            <div class="money">￥123</div>
                            <div class="modif">
                                <button class="minus">-</button>
                                <div class="number">5</div>
                                <button class="add">+</button>  
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="img"><img src="http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg" alt="" /></div>
                    <div class="content">
                        <div class="name">小笼包</div>
                        <div class="deat">好吃好吃好吃好吃。。。</div>
                        <div class="site">
                            <div class="money">￥123</div>
                            <div class="modif">
                                <button class="minus">-</button>
                                <div class="number">5</div>
                                <button class="add">+</button>  
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="img"><img src="http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg" alt="" /></div>
                    <div class="content">
                        <div class="name">小笼包</div>
                        <div class="deat">好吃好吃好吃好吃。。。</div>
                        <div class="site">
                            <div class="money">￥123</div>
                            <div class="modif">
                                <button class="minus">-</button>
                                <div class="number">5</div>
                                <button class="add">+</button>  
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="img"><img src="http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg" alt="" /></div>
                    <div class="content">
                        <div class="name">小笼包</div>
                        <div class="deat">好吃好吃好吃好吃。。。</div>
                        <div class="site">
                            <div class="money">￥123</div>
                            <div class="modif">
                                <button class="minus">-</button>
                                <div class="number">5</div>
                                <button class="add">+</button>  
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <backTop />
    </div>
</template>

<script>
import headTit from "../../components/headtit.vue";
import backTop from "../../components/backtopD.vue";
import Base from "../../components/base.js";
export default {
    name: 'home',
    data () {
        return {
        }
    },
    mounted () {
        this.init();
    },
    methods:{
        init () {
            if( !Base.getCookie() ){
                this.$router.push({path:'/login'});
            }
            console.log(this.$router.history.current.params.num);
            document.getElementById("app").scrollTop = 0;
        }
    },
    destroyed () {
    },
    components: { backTop, headTit }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .body{
        height: 100%;
        width: 100%;
        position: relative;
        padding-top: 2.6rem;
        .topbg{
            position: fixed;
            top:0;
            z-index: -1;
            height: 6rem;
            width: 100%;
            background:url(http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg) no-repeat center center;
            background-size: cover;
            filter: url(http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg);
            -webkit-filter: blur(8px);
            -moz-filter: blur(8px);
            -ms-filter: blur(8px);
            filter: blur(8px);
        }
        .center{
            height: 100%;
            overflow: auto;
            .top{
                position: relative;
                padding-top: 6.5rem;
                img{
                    width: 5rem;
                    height: 5rem;
                    position: absolute;
                    left: 0;
                    right: 0;
                    top:1.5rem;
                    margin: auto;
                    z-index: 1;
                }
                .info{
                    height: 6rem;
                    text-align: center;
                    padding-top: 0.5rem;
                    margin-bottom: 1rem;
                    .name{
                        font-size: 1.7rem;
                        font-family: '楷体';
                        height: 1.8rem;
                        line-height: 1.8rem;
                        color: #333;
                        font-weight: 400
                    }
                    .grade{
                        height: 1.4rem;
                        line-height: 1.4rem;
                        .stars{
                            letter-spacing: -0.2rem;
                            color: #ff9800;
                            font-size: 1.2rem ;
                            height: 1.2rem;
                            line-height: 1.4rem;
                        }
                    }
                    .site{
                        line-height: 1.8rem;
                        color: #888;
                    }
                }
            }
            .cont{
                padding-top: 1rem;
                height: 100rem;
                li{
                    margin-bottom: 1rem;
                    overflow: hidden;
                    border-bottom: solid 1px #eee;
                    padding: 0 0.8rem 0.8rem 0.8rem;
                    .img{
                        float: left;
                        width: 6.1rem;
                        img{
                            width: 6rem;
                            height: 6rem;
                        }
                    }
                    .content{
                        float: left;
                        padding: 0 0.8rem;
                        .name{
                            font-size: 1.3rem;
                            height: 1.8rem;
                            line-height: 1.8rem;
                            color: #333;
                            font-weight: 400
                        }
                        .deat{
                            color: #888;
                            font-size: 0.9rem;
                            margin-left: 0.5rem;
                            line-height: 1.2rem;
                            height: 1.2rem;
                        }
                        .site{
                            height: 3rem;
                            line-height: 3rem;
                            .money{
                                float: left;
                                height: 3rem;
                                color: #f00;
                                font-size: 1.2rem;
                            }
                            .modif{
                                float: left;
                                height: 3rem;
                                margin-left: 4rem;
                                width: 8rem;
                                button{
                                    display: block;
                                    float: left;
                                    height: 1.6rem;
                                    width: 1.6rem;
                                    margin-top: 0.7rem;
                                    border-radius: 0.8rem;
                                    border: none;
                                    background:rgba(255, 152, 0, 0.8);
                                    color: #fff;
                                }
                                .number{
                                    float: left;
                                    font-size: 1.1rem;
                                    padding:0 1rem;
                                    color: #333;
                                }
                            }
                        }
                    } 
                }
            }
        }
            
    }
</style>
