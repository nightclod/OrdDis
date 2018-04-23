<template>
    <div class="body">
        <div class="mineInfo">
            <div class="img">
                <img src="../../assets/img/head.png" alt="">
            </div>
            <div class="info">
                名字：{{name}}<br/>
                账户：{{account}}<br/>
                手机号：{{phone}}
            </div>
            <div class="details">
                <i class="iconfont icon-icon_on_the_right"></i>
            </div>
        </div>
        <div class="cent">
            <div class="centUl">
                <div class="list">
                    修改收货地址
                    <i class="iconfont icon-icon_on_the_right"></i>
                </div>
                <div class="list">
                    修改密码
                    <i class="iconfont icon-icon_on_the_right"></i>
                </div>
                <button class="quit" @click="quit"> 退出登录 </button>
            </div>
        </div>
        <footView />
    </div>
</template>

<script>
import footView from "../../components/footer.vue";
import Base from "../../components/base.js";
export default {
    name: 'mine',
    data () {
        return {
            name: "名字",
            account: "1589888",
            phone: "17865923008"
        }
    },
    mounted () {
        this.init();
    },
    methods:{
        init() { 
            if( !Base.getCookie("ordDisCooike") ){
                this.$router.push({path:'/login'});
            }else{
                
            }

        },
        quit () {
            Base.deleteCookie();
            this.$router.push({path:'/login'});
        }
    },
    components: { footView }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .body{
        height: 100%;
        .mineInfo{
            height: 10rem;
            background: #03a9f4;
            color: #fff;
            .img{
                float: left;
                margin-top: 2.5rem;
                margin-left: 2.5rem;
                width: 5rem;
                height: 5rem;
                border-radius: 2.5rem;
                overflow: hidden;
                img{
                    width: 5rem;
                    height: 5rem;
                }
            }
            .info{
                float: left;
                margin-left: 2.5rem;
                padding-top:2rem;
                height: 10rem;
                width: 50%;
                line-height: 2rem;
                font-size: 1.1rem;
            }
            .details{
                height: 10rem;
                float: right;
                padding-right: 1rem;
                line-height: 10rem;
            }
        }
        .cent{
            height: calc(100% - 13.5rem);
            overflow: auto;
            .centUl{
                position: relative;
                min-height: 100%;
                .list{
                    height: 4rem;
                    line-height: 4rem;
                    background: #eee;
                    border-bottom: solid 1px #ddd;
                    padding-left: 2rem;
                    color: #333;
                    font-size: 1.1rem;
                    i{
                        display: block;
                        float: right;
                        height: 4rem;
                        padding-right: 1rem;
                        line-height: 4rem;
                        color: #00bcd4;
                    }
                }
                .quit{
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    height: 3rem;
                    width: calc(100% - 1rem);
                    position: absolute;
                    bottom: 0.5rem;
                    background: #f00;
                    color: #fff;
                    border: none;
                    border-radius: .3rem;
                    font-size: 1.1rem;
                }
            }
        }
                
    }
</style>
