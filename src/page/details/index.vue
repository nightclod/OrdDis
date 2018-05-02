<template>
    <div class="body" ref="center">
        <headTit tit="" link="购物车" name="shop"></headTit>
        <div class="topbg" :style="{backgroundImage: 'url('+ detailsData.imgUrl +')'}"></div>
        <div class="center" id="cent" >
            <div class="top">
                <img :src="detailsData.imgUrl" alt="" />
                <div class="info">
                    <div class="name">{{detailsData.name}}</div>
                    <div class="grade">
                        <div class="stars">
                            <i class="iconfont icon-xing_f" v-for="m in (detailsData.stars || 0)"></i>
                            <i class="iconfont icon-xing_l" v-for="k in (5 - (detailsData.stars || 0))"></i>
                        </div>
                    </div>
                    <div class="site">{{ detailsData.site }}</div>
                </div>
            </div>
            <ul class="cont">
                <li v-for="(item) in detailsData.list">
                    <div class="img"><img :src='item.imgUrl' alt="" /></div>
                    <div class="content">
                        <div class="name">{{item.name}}</div>
                        <div class="deat">{{item.deat}}</div>
                        <div class="site">
                            <div class="money">￥{{item.money}}</div>
                            <div class="modif">
                                <button class="minus" @click="minusNum(item.id)"><i class="iconfont icon-subtract"></i></button>
                                <div class="number">{{item.number}}</div>
                                <button class="add" @click="addNum(item.id)"><i class="iconfont icon-add"></i></button>  
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <backTop />
        <div class="totality">
            <div class="info"></div>
            <button>添加到购物车</button>
        </div>
    </div>
</template>

<script>
import headTit from "../../components/headtit.vue";
import backTop from "../../components/backtopD.vue";
import Base from "../../components/base.js";
import { mapState, mapActions } from 'vuex';
export default {
    name: 'home',
    data () {
        return {
            bgImg : "",
            shopData : {}
        }
    },
    computed: mapState([
  		'detailsData'
    ]),
    mounted () {
        this.init();
    },
    methods:{
        ...mapActions([
  			'getDatailsData'
  		]),
        init () {
            var info = Base.getCookie(true);
            if( !info ){
                this.$router.push({path:'/login'});
            }
            this.getDatailsData({
                id : info.account, 
                num : this.$router.history.current.params.num
            });
           
            console.log(this.$router.history.current.params.num);
            document.getElementById("app").scrollTop = 0;
        },
        minusNum (id) {
            console.log(id);
        },
        addNum (id) {
            console.log(id);
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
            background: no-repeat center center;
            // background-image: url(this.datailsData.imgUrl);
            background-size: cover;
            -webkit-filter: blur(8px);
            -moz-filter: blur(8px);
            -ms-filter: blur(8px);
            filter: blur(8px);
        }
        .center{
            height: 100%;
            overflow: auto;
            padding-bottom: 3rem;
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
                                width: 5rem;
                            }
                            .modif{
                                float: left;
                                height: 3rem;
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
                                    padding: 0;
                                    text-align: center;
                                }
                                .number{
                                    float: left;
                                    font-size: 1.1rem;
                                    padding:0 .5rem;
                                    color: #333;
                                    width: 3rem;
                                    text-align: center;
                                }
                            }
                        }
                    } 
                }
            }
        }
        .totality{
            position: fixed;
            width: 100%;
            height: 3.5rem;
            bottom: 0;
            background-color: #efefef;
            z-index: 3;
            .info{
                display: block;
                float: left;
            }
            button{
                display: block;
                float: right;
                height: 2rem;
                width: 6.5rem;
                background: #4caf50;
                border-radius: .5rem;
                border: none;
                line-height: 2rem;
                font-size: .8rem;
                color: #fff;
                text-align: center;
                margin-top: .8rem;
                margin-right: 1rem;
            }
        }  
    }
</style>
