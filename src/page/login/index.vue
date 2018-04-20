<template>
    <div class="body">
        <div class="bgimg"></div>
        <form>
            <div class="head">
                <img src="../../assets/img/head.png" alt="">
            </div>
            <div class="info">
                <div class="input">
                    <i class="iconfont icon-wode"></i>
                    <input type="text" class=""/>
                </div>
                <div class="bot">
                    <div class="mask"></div>
                </div>
            </div>
            <div class="info">
                <div class="input">
                    <i class="iconfont icon-icon-mima"></i>
                    <input type="password" />
                </div>
                <div class="bot">
                    <div class="mask"></div>
                </div>
            </div>
            <div class="login">
                <button @click="login">登 &nbsp;&nbsp;&nbsp; 录</button>
            </div>
            <div class="hint">
                <div class="forget">
                    <router-link :to="{name:'forget'}">忘记密码</router-link>
                </div>
                <div class="register">
                    <router-link :to="{name:'register'}">注册账号</router-link>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import Base from "../../components/base.js";
export default {
    name: 'mine',
    data () {
        return {
        
        }
    },
    methods:{
        login () {
            Base.setCookie({account:"123456"});
            this.$router.push({path:'/'});
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .body{
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
        .bgimg{
            position: absolute;
            z-index: 1;
            height: 100%;
            width: 100%;
            background:url(../../assets/img/logbg.jpg) no-repeat center center;
            background-size: cover;
            filter: url(../../assets/img/logbg.jpg); /* FireFox, Chrome, Opera */
            -webkit-filter: blur(6px); /* Chrome, Opera */
            -moz-filter: blur(6px);
            -ms-filter: blur(6px);
            filter: blur(6px);
        }
        form{
            position: absolute;
            z-index: 2;
            width: 24rem;
            height: 36rem;
            left:0;right:0;top:0;bottom:0;
            margin: auto;
            .head{
                height: 8rem;
                margin-bottom: 3rem;
                img{
                    height: 8rem;
                    margin: 0 auto;
                }
            }
            .info{
                width: 24rem;
                height: 5rem;
                padding-top: 2.7rem;
                .input{
                    height: 2rem;
                    color: #333;
                    i{
                        display: inline-block;
                        margin-left: 3.5rem;
                        font-size: 1.4rem;
                        font-weight: 700;
                        color: #03a9f4;
                    }
                    input{
                        border: none;
                        height: 2rem;
                        width: 15rem;
                        background: rgba(0,0,0,0);
                        display: inline-block;
                        line-height: 2rem;
                        font-size: 1.4rem;
                        color: #1c7a62;
                    }
                }
                .bot{
                    height: .3rem;
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
                
            }
            .login{
                padding-top: 2rem;
                height: 5rem;
                button{
                    display: block;
                    height: 3rem;
                    width: 16rem;
                    background: rgba(76, 175, 80, 0.6);
                    border-radius: .5rem;
                    border: none;
                    margin: 0 auto;
                    line-height: 3rem;
                    font-size: 1.4rem;
                    color: #fff;
                    text-align: center;
                    
                }
            }
            .hint{
                height: 1rem;
                width: 22rem;
                margin: 4rem auto;
                margin-bottom: 0;
                line-height: 1rem;
                font-size: .9rem;
                .forget{
                    height: 1rem;
                    float: left;
                }
                .register{
                    height: 1rem;
                    float: right;
                }
                a{
                    color: #506f52;
                }
            }
        }
    }
</style>
