<template>
    <div class="body">
        <div class="search">
            <form>
                <input type="text" autocomplete="off" placeholder="搜索" ref="search"/>
                <button type="button" @click="quer($refs.search.value)" class="btn_search"><i class="iconfont icon-sousuo"></i></button>
            </form>
        </div>
        <div class="menu">
            <ul>
                <li @click="quer('美食')">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-mifan"></use>
                    </svg>
                    <div class="menu_li">美食</div>
                </li>
                <li @click="quer('午餐')">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-wucan"></use>
                    </svg>
                    <div class="menu_li">午餐</div>
                </li>
                <li @click="quer('晚餐')">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dinner"></use>
                    </svg>
                    <div class="menu_li">晚餐</div>
                </li>
                <li @click="quer('饮品')">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-meishijiayin"></use>
                    </svg>
                    <div class="menu_li">饮品</div>
                </li>
                <li @click="quer('汉堡')">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-meishi"></use>
                    </svg>
                    <div class="menu_li">汉堡</div>
                </li>
                <li @click="quer('超值')">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-miantiao"></use>
                    </svg>
                    <div class="menu_li">超值</div>
                </li>
                <li @click="quer('小吃')">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-kaochuan"></use>
                    </svg>
                    <div class="menu_li">小吃</div>
                </li>
                <li @click="quer('速达')">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-_waimai"></use>
                    </svg>
                    <div class="menu_li">速达</div>
                </li>
            </ul>
        </div>
        <div class="recommend">
            <div class="rec_tit">
                <div class="mask"></div>
            </div>
        	<ul class="rec_cont">
        		<li v-for="(item) in itemData ">
                    <router-link :to="{path:'/details/' + item.storeId }">
                        <div class="img"><img :src='item.imgUrl' alt="" /></div>
                        <div class="content">
                            <div class="name">{{item.name}}</div>
                            <div class="grade">
                                <div class="stars">
                                    <i class="iconfont icon-xing_f" v-for="n in item.stars"></i>
                                    <i class="iconfont icon-xing_l" v-for="s in (5 - item.stars)"></i> 
                                </div>
                                <div class="money">人均 ￥ {{item.money}}</div>
                            </div>
                            <div class="site">{{item.site}}</div>
                        </div>
                    </router-link>
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
import { mapState, mapActions } from 'vuex';
export default {
    name: 'home',
    data () {
        return {
        }
    },
    computed: mapState([
  		'itemData'
	]),
    mounted () {
        this.init();
    },
    methods:{
        ...mapActions([
  			'listData'
  		]),
        init () {
            var info = Base.getCookie(true);
            if( !info ){
                this.$router.push({path:'/login'});
            }
            if(info !== true){
                this.listData(info.account);
            }
            document.getElementById("app").scrollTop = 0;
            this.quer(this.$route.params.info);
        },
        quer (key) {
            if(key){
                this.$refs.search.value = key;
            }
            console.log(key);
        }
    },
    destroyed () {
    },
    components: { footView , backTop }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .body{
        padding-bottom:3.4rem; 
        .search{
            height: 3rem;
            width: 100%;
            text-align: center;
            transition:.2s;
            overflow: hidden;
            form{
                height: 2rem;
                position: relative;
                left: 10%;
                padding-top: .6rem;
                input{
                    font-family: 'Raleway', Arial, sans-serif;
                    border: none;
                    height: 2rem;
                    width: 75%;
                    line-height: 2rem;
                    font-size:1rem;
                    color: #333;
                    background: #eee ;
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
                        color: #665c83;
                    }
                }
            }
        }
        .menu{
        	background: #fff;
            height: 5.33rem;
            overflow: hidden;
            ul{
                overflow: auto;
                white-space:nowrap;
                li{
                    width: 4rem;
                    height: 5rem;
                    text-align: center;
                    display: inline-block;
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
        }
        .recommend{
        	background: #fff;
        	.rec_tit{
        		height: .3rem;
                margin-bottom: 1.5rem;
                .mask {
                    overflow: hidden;
                    height: 0.3rem;
                }
                .mask:after {
                    content: '';
                    display: block;
                    margin: -27px auto 0;
                    width: 100%;
                    height: 25px;
                    border-radius: 125px/12px;
                    box-shadow: 0 0 8px #141857;
                }
        	}
        	.rec_cont{
                flex: 1;
                li{
                   margin-bottom: 1rem;
                   overflow: hidden;
                   border-bottom: solid 1px #eee;
                   padding: 0 0.8rem 0.8rem 0.8rem;
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
