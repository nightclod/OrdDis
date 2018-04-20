<template>
    <div class="body">
        <div class="bgimg"></div>
        <form>
            <div class="info">
                <div class="input">
                    <span>名字：</span>
                    <input type="text" name="name"/>
                </div>
                <div class="bot"><div class="mask"></div></div>
            </div>
            <div class="info">
                <div class="input">
                    <span>密码：</span>
                    <input type="password" name="password"/>
                </div>
                <div class="bot"><div class="mask"></div></div>
            </div>
            <div class="info">
                <div class="input">
                    <span>确认密码：</span>
                    <input type="password" name="affirm"/>
                </div>
                <div class="bot"><div class="mask"></div></div>
            </div>
            <div class="info">
                <div class="input">
                    <span>手机号：</span>
                    <input type="text" name="phone"/>
                </div>
                <div class="bot"><div class="mask"></div></div>
            </div>
            <div class="info">
                <div class="input verify">
                    <span>验证码：</span>
                    <input type="text" name="verify"/>
                    <button>获取验证码</button>
                </div>
                <div class="bot"><div class="mask"></div></div>
            </div>
            <div class="reg">
                <button @click="reg">注 &nbsp;&nbsp;&nbsp; 册</button>
            </div>
            <div class="hint">
                <div class="login">
                    <router-link :to="{name:'login'}">去登录</router-link>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    name: 'mine',
    data () {
        return {
        
        }
    },
    methods:{
        reg () {
            console.log("123");
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
        overflow: auto;
        .bgimg{
            position: absolute;
            z-index: 1;
            height: 100%;
            width: 100%;
            background:url(../../assets/img/regbg.jpg) no-repeat center center;
            background-size: cover;
            filter: url(../../assets/img/regbg.jpg);
            -webkit-filter: blur(6px);
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
            .info{
                width: 24rem;
                height: 5rem;
                padding-top: 2.7rem;
                .input{
                    height: 2rem;
                    color: #333;
                    span{
                        display: inline-block;
                        width: 5rem;
                        text-align: right;
                        color: #293990;
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
                .verify{
                    input{
                        width: 8rem;
                    }
                    button{
                        display: block;
                        float: right;
                        height: 1.6rem;
                        border: none;
                        background: rgba(0, 150, 136, 0.7);
                        border-radius: 0.3rem;
                        color: #fff;
                        font-size: 0.8rem;
                        line-height: 1.6rem;
                        padding: 0 1rem;
                        margin-top:0;
                        margin-right: 3rem;
                    }
                }
            }
            .reg{
                padding-top: 2rem;
                height: 5rem;
                button{
                    display: block;
                    height: 3rem;
                    width: 16rem;
                    background: rgba(76, 175, 172, 0.6);
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
                .login{
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
