<template>
    <div class="body" ref="center">
        <div class="search_top" ref="top">
            <form action="">
                <input type="text" name="search_top" autocomplete="off" placeholder="搜索" />
                <button class="btn_search"><i class="iconfont icon-sousuo"></i></button>
            </form>
        </div>
        <div class="banner">
            <img src="../../assets/img/meishi1.jpg">
            <div class="search_outer">
                <input type="text" name="search" class="search" autocomplete="off" placeholder="搜索" />
                <span class="but"></span>
                <button class="btn_search"><i class="iconfont icon-sousuo"></i></button>
            </div>
        </div>
        <div class="menu">
            <ul>
                <li>
                    <router-link :to="{name:'list', params:{ info: '美食' }}">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-mifan"></use>
                        </svg>
                        <div class="menu_li">美食</div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'list', params:{ info: '午餐' }}">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-wucan"></use>
                        </svg>
                        <div class="menu_li">午餐</div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'list', params:{ info: '晚餐' }}">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-dinner"></use>
                        </svg>
                        <div class="menu_li">晚餐</div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'list', params:{ info: '饮品' }}">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-meishijiayin"></use>
                        </svg>
                        <div class="menu_li">饮品</div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'list', params:{ info: '汉堡' }}">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-meishi"></use>
                        </svg>
                        <div class="menu_li">汉堡</div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'list', params:{ info: '超值' }}">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-miantiao"></use>
                        </svg>
                        <div class="menu_li">超值</div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'list', params:{ info: '小吃' }}">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-kaochuan"></use>
                        </svg>
                        <div class="menu_li">小吃</div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'list', params:{ info: '速达' }}">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-_waimai"></use>
                        </svg>
                        <div class="menu_li">速达</div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="recommend">
            <div class="rec_tit">
                —— · &nbsp; 推荐商家 &nbsp; · ——
            </div>
            <ul class="rec_cont">
                <li>
                    <router-link :to="{name:'details', params:{ info: '123' }}">
                        <div class="img"><img src="http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg" alt="" /></div>
                        <div class="content">
                            <div class="name">美好一天早餐店</div>
                            <div class="grade">
                                <div class="stars">
                                    <i class="iconfont icon-xing_f"></i> 
                                    <i class="iconfont icon-xing_f"></i> 
                                    <i class="iconfont icon-xing_l"></i> 
                                    <i class="iconfont icon-xing_l"></i> 
                                    <i class="iconfont icon-xing_l"></i> 
                                </div>
                                <div class="money">人均 ￥ 20</div>
                            </div>
                            <div class="site">北京市王府井大街</div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <div class="img"><img src="http://clubimg.dbankcdn.com/data/attachment/forum/201610/16/225213glupub5u6u17alkx.jpg" alt="" /></div>
                    <div class="content">
                        <div class="name">美好一天早餐店</div>
                        <div class="grade">
                            <div class="stars">
                                <i class="iconfont icon-xing_f"></i> 
                                <i class="iconfont icon-xing_f"></i> 
                                <i class="iconfont icon-xing_f"></i> 
                                <i class="iconfont icon-xing_l"></i> 
                                <i class="iconfont icon-xing_l"></i> 
                            </div>
                            <div class="money">人均 ￥ 20</div>
                        </div>
                        <div class="site">北京市王府井大街</div>
                    </div>
                </li>
                <li>
                    <div class="img"><img src="http://clubimg.dbankcdn.com/data/attachment/forum/201610/16/225215dmzwubjlphwpv9mq.jpg" alt="" /></div>
                    <div class="content">
                        <div class="name">美好一天早餐店</div>
                        <div class="grade">
                            <div class="stars">
                                <i class="iconfont icon-xing_f"></i> 
                                <i class="iconfont icon-xing_f"></i> 
                                <i class="iconfont icon-xing_f"></i> 
                                <i class="iconfont icon-xing_l"></i> 
                                <i class="iconfont icon-xing_l"></i> 
                            </div>
                            <div class="money">人均 ￥ 20</div>
                        </div>
                        <div class="site">北京市王府井大街</div>
                    </div>
                </li>
                <li>
                    <div class="img"><img src="http://www.fancai.com//Uploads/MeiShi/2017-08-16/59939b3328d9e.jpg" alt="" /></div>
                    <div class="content">
                        <div class="name">美好一天早餐店</div>
                        <div class="grade">
                            <div class="stars">
                                <i class="iconfont icon-xing_f"></i> 
                                <i class="iconfont icon-xing_f"></i> 
                                <i class="iconfont icon-xing_f"></i> 
                                <i class="iconfont icon-xing_l"></i> 
                                <i class="iconfont icon-xing_l"></i> 
                            </div>
                            <div class="money">人均 ￥ 20</div>
                        </div>
                        <div class="site">北京市王府井大街</div>
                    </div>
                </li>
                <li>
                    <div class="img"><img src="http://www.fancai.com//Uploads/MeiShi/2017-08-16/59939b3328d9e.jpg" alt="" /></div>
                    <div class="content">
                        <div class="name">美好一天早餐店</div>
                        <div class="grade">
                            <div class="stars">
                                <i class="iconfont icon-xing_f"></i> 
                                <i class="iconfont icon-xing_f"></i> 
                                <i class="iconfont icon-xing_f"></i> 
                                <i class="iconfont icon-xing_l"></i> 
                                <i class="iconfont icon-xing_l"></i> 
                            </div>
                            <div class="money">人均 ￥ 20</div>
                        </div>
                        <div class="site">北京市王府井大街</div>
                    </div>
                </li>
                <li>
                    <div class="img"><img src="http://www.fancai.com//Uploads/MeiShi/2017-08-16/59939b3328d9e.jpg" alt="" /></div>
                    <div class="content">
                        <div class="name">美好一天早餐店</div>
                        <div class="grade">
                            <div class="stars">
                                <i class="iconfont icon-xing_f"></i> 
                                <i class="iconfont icon-xing_f"></i> 
                                <i class="iconfont icon-xing_f"></i> 
                                <i class="iconfont icon-xing_l"></i> 
                                <i class="iconfont icon-xing_l"></i> 
                            </div>
                            <div class="money">人均 ￥ 20</div>
                        </div>
                        <div class="site">北京市王府井大街</div>
                    </div>
                </li>
                <li>
                    <div class="img"><img src="http://www.fancai.com//Uploads/MeiShi/2017-08-16/59939b3328d9e.jpg" alt="" /></div>
                    <div class="content">
                        <div class="name">美好一天早餐店</div>
                        <div class="grade">
                            <div class="stars">
                                <i class="iconfont icon-xing_f"></i> 
                                <i class="iconfont icon-xing_f"></i> 
                                <i class="iconfont icon-xing_f"></i> 
                                <i class="iconfont icon-xing_l"></i> 
                                <i class="iconfont icon-xing_l"></i> 
                            </div>
                            <div class="money">人均 ￥ 20</div>
                        </div>
                        <div class="site">北京市王府井大街</div>
                    </div>
                </li>
            </ul>
        </div>
        <backTop />
        <footView />
    </div>
</template>

<script>
import footView from "../../components/footer.vue";
import backTop from "../../components/backtop.vue";
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
            if( !Base.getCookie("ordDisCooike") ){
                this.$router.push({path:'/login'});
            }
            document.getElementById("app").scrollTop = 0;
            document.getElementById("app").addEventListener('scroll', this.handlScroll);
        },
        handlScroll () {
            var scrollTop = document.getElementById("app").scrollTop;
            if(scrollTop >= 80 ){
                this.$refs.top.style.height = "3rem"
            }else{
                this.$refs.top.style.height = "0"
            }
        }
    },
    destroyed () {
        document.getElementById("app").removeEventListener('scroll', this.handlScroll);
    },
    components: { footView , backTop }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .body{
        padding-bottom:3.4rem; 
        .search_top{
            z-index: 2;
            position: fixed;
            top:0;
            height: 0;
            width: 100%;
            background: #03a9f4;
            text-align: center;
            transition:.2s;
            overflow: hidden;
            form{
                height: 2rem;
                margin-left: -8rem;
                position: relative;
                left: 50%;
                padding-top: .6rem;
                input{
                    font-family: 'Raleway', Arial, sans-serif;
                    border: none;
                    height: 2rem;
                    width: 14rem;
                    line-height: 2rem;
                    font-size:1rem;
                    color: #333;
                    background: #fff ;
                    display: block;
                    float: left;
                    padding: 0;
                    padding-left: 1rem;
                }
                .btn_search{
                    border: none;
                    background:#fff;
                    display: block;
                    float: left;
                    padding: 0 .5rem;
                    height: 2rem;
                    i{
                        font-size: 1.6rem;
                        color: #2196f3;
                    }
                }
            }
        }
        .banner{
            position: relative;
            height: 10rem;
            width: 100%;
            background: #f2f0ec;
            overflow: hidden;
            img{
                position: absolute;
                max-height: 100%;
                left:-3.8rem;
            }
            .search_outer{
                top: 4rem;
                right: 11%;
                position: absolute;
                height: 2.1rem;
                width: 16rem;
                .search{
                    font-family: 'Raleway', Arial, sans-serif;
                    border: none;
                    border-bottom: solid 1px #fed508;
                    height: 2rem;
                    width: 16rem;
                    line-height: 2rem;
                    font-size:1rem;
                    color: #466674;
                    background: rgba(0, 0, 0, 0) ;
                    font-weight: 800;
                    padding-left: 1rem;
                }
                .but{
                    position: absolute;
                    bottom: 0;
                    height: 2px;
                    display: block;
                    width: 0;
                    background: #4CAF50;
                    transition:.3s;
                }
                .search:focus + .but{width: 100%;}
                .btn_search{
                    display: block;
                    position: absolute;
                    border: none;
                    background: rgba(0, 0, 0, 0) ;
                    bottom: 0.2rem;
                    right: 0;
                    font-size: 1rem;
                    i{
                        font-size: 1.6rem;
                        color: #08670c;
                    }
                }
            } 
        }
        .menu{
            background: #fff;
            li{
                width: 24%;
                height: 5rem;
                text-align: center;
                display: inline-block;
                a{
                    color: #000;
                }
                .icon {
                    margin-top: .4rem;
                    width: 2rem; 
                    height: 2rem;
                }
                .menu_li{
                    font-size: 1rem;
                }
            }
        }
        .recommend{
            background: #fff;
            .rec_tit{
                height: 2.5rem;
                text-align: center;
                color: #aaa;
                line-height: 2rem;
            }
            .rec_cont{
                flex: 1;
                li{
                    margin-bottom: 1rem;
                    overflow: hidden;
                    border-bottom: solid 1px #eee;
                    padding: 0 0.8rem 0.8rem 0.8rem;
                    a{
                        overflow: hidden;
                    }
                    .img{
                        float: left;
                        width: 5.1rem;
                        img{
                            width: 5rem;
                            height: 5rem;
                        }
                    }
                    .content{
                        float: left;
                        padding: 0 0.8rem;
                        .name{
                            font-size: 1.4rem;
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
                                float: left;
                                letter-spacing: -0.2rem;
                                color: #ff9800;
                                font-size: 1.2rem !important ;
                                height: 1.2rem;
                                line-height: 1.4rem;
                            }
                            .money{
                                height: 1.4rem;
                                line-height: 1.6rem;
                                float: left;
                                color: #aaa;
                                font-size: 0.8rem;
                                margin-left: 1.5rem;
                            }
                        }
                        .site{
                            line-height: 1.8rem;
                            color: #888;
                        }
                    } 
                }
            }
        }

    }
</style>
