<template>
    <div class="body">
        <div class="bgimg"></div>
        <div class="center">
            <form ref="cent">
                <div class="head">
                    <img src="../../assets/img/head.png" ref="name">
                </div>
                <div class="info">
                    <div class="input">
                        <i class="iconfont icon-wode"></i>
                        <input type="text" v-model="name" @input="filName('name')" @blur="blur"  maxlength="10" placeholder="请输入名字或账号"/>
                    </div>
                    <div class="bot">
                        <div class="mask"></div>
                    </div>
                </div>
                <div class="info">
                    <div class="input">
                        <i class="iconfont icon-icon-mima"></i>
                        <input type="password" v-model="password" @input="filName('password')" maxlength="16" placeholder="请输入密码"/>
                    </div>
                    <div class="bot">
                        <div class="mask"></div>
                    </div>
                </div>
                <div class="login">
                    <button type="button" @click="login">登 &nbsp;&nbsp; 录</button>
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
            
    </div>
</template>

<script>
import Base from "../../components/base.js";
export default {
    name: 'mine',
    data () {
        return {
            name: "",
            password: "",
            img: "",
            fullHeight: document.documentElement.clientHeight
        }
    },
    methods:{
        filName(key){
            var that = this;
            switch(key){
                case "name": 
                    this.name = this.name.replace(/[^0-9A-Za-z\u4E00-\u9FA5]/g,'');
                    break;
                case "password": 
                    this.password = this.password.replace(/[^0-9A-Za-z]/g,'');
                    break;
            }
        },
        blur(){
            if(this.name === "123456"){
                this.$refs.name.setAttribute("src", "https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=72949495,415020620&fm=202&mola=new&crop=v1");
            }else{
                this.$refs.name.setAttribute("src", this.img);
            }
        },
        login () {
            if(!this.name){
                alert("请输入账号");
            }else if(!this.password){
                alert("请输入密码");
            }else{
                if(this.name === "123456" && this.password === "123456789"){








                    Base.setCookie({
                        account: "427123",
                        name: "123456",
                        phone: "17865923007"
                    });






                    this.$router.push({path:'/'});
                }else{
                    alert("账号密码不对");
                }
            }
        }
    },
    mounted() {
      const that = this;
      this.img = this.$refs.name.getAttribute("src");
      window.onresize = () => {//窗口改变
        return (() => {
          that.fullHeight = document.documentElement.clientHeight
        })()
      }
    },
    watch: {
        fullHeight (val) {
            if(val < 480){
                this.$refs.cent.style.top = "auto"
                this.$refs.cent.style.marginTop = "0"
            }else{
                this.$refs.cent.style.top = "50%"
                this.$refs.cent.style.marginTop = "-18rem"
            }
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
            background:url(../../assets/img/logbg.jpg) no-repeat center center;
            background-size: cover;
            filter: url(../../assets/img/logbg.jpg);
            -webkit-filter: blur(6px);
            -moz-filter: blur(6px);
            -ms-filter: blur(6px);
            filter: blur(6px);
        }
        .center{
            height: 100%;
            width: 100%;
            overflow: auto;
            form{
                position: relative;
                z-index: 2;
                width: 24rem;
                height: 36rem;
                top:50%;
                margin: auto;
                margin-top:-18rem;
                .head{
                    height: 8rem;
                    width: 8rem;
                    border-radius: 4rem;
                    overflow: hidden;
                    margin: 0 auto;
                    margin-bottom: 3rem;
                    border: solid 1px #009688;
                    img{
                        height: 8rem;
                        width: 8rem;
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
                            font-size: 1.25rem;
                            color: #1c7a62;
                        }
                        ::-webkit-input-placeholder{
                            color: #888;
                            font-size: 1rem;
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
            
    }
</style>
