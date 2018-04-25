<template>
    <div class="body">
        <headTit :tit="'修改密码'" ></headTit>
        <div class="bgimg"></div>
        <div class="center">
            <form ref="cent">
                <div class="info">
                    <div class="input">
                        <span>旧密码：</span>
                        <input type="password" v-model="lpassword" @input="filName('password')" @blur="blur('lpassword')"  maxlength="16" />
                        <i class="iconfont" ref="hint_lpassword"></i>
                    </div>
                    <div class="bot"><div class="mask"></div></div>
                    <div class="err_hint">{{info_lpassword}}</div>
                </div>
                <div class="info">
                    <div class="input">
                        <span>新密码：</span>
                        <input type="password" v-model="password" @input="filName('password')" @blur="blur('password')"  maxlength="18" placeholder="8至16位字母、数字组成" />
                        <i class="iconfont" ref="hint_password"></i>
                    </div>
                    <div class="bot"><div class="mask"></div></div>
                    <div class="err_hint">{{info_password}}</div>
                </div>
                <div class="info">
                    <div class="input">
                        <span>确认密码：</span>
                        <input type="password" v-model="affirm" @input="filName('affirm')" @blur="blur('affirm')"  maxlength="18"/>
                        <i class="iconfont" ref="hint_affirm"></i>
                    </div>
                    <div class="bot"><div class="mask"></div></div>
                    <div class="err_hint">{{info_affirm}}</div>
                </div>
                <div class="info">
                    <div class="input verify">
                        <span>验证码：</span>
                        <input type="tel" @input="filName('verify')" @blur="blur('verify')" v-model="verify" maxlength="6"/>
                        <button @click="gitVerify" type="button">获取验证码</button>
                    </div>
                    <div class="bot"><div class="mask"></div></div>
                    <div class="err_hint">{{info_verify}}</div>
                </div>
                <div class="reg">
                    <button @click="regInfo" type="button">确 &nbsp;&nbsp; 定</button>
                </div>
                <div class="hint">
                    <div class="login">
                        <router-link :to="{name:'login'}">重新登录</router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import headTit from "../../components/headtit.vue";
export default {
    name: 'mine',
    data () {
        return {
            lpassword: "",
            info_lpassword: "",
            v_lpassword: "",
            password: "",
            info_password: "",
            v_password: false,
            affirm: "",
            info_affirm: "",
            v_affirm: false,
            verify: "",
            info_verify: "",
            ht_verify: "123456",
            v_verify: false,
            fullHeight: document.documentElement.clientHeight
        }
    },
    methods:{
        filName(key){
            var that = this;
            switch(key){
                case "password": 
                    that.password = that.password.replace(/[^0-9A-Za-z]/g,'');
                    break;
                case "affirm": 
                    that.affirm = that.affirm.replace(/[^0-9A-Za-z]/g,'');
                    break;
                case "verify": 
                    that.verify = that.verify.replace(/[^0-9]/g,'');
                    break;
            }
        },
        blur(key){
            var that = this;
            switch(key){
                case "lpassword": 
                    if(that.lpassword){
                        if(that.lpassword.length > 7){
                            that.info("lpassword", true, "");
                        }else{
                            that.info("lpassword", false, "由8至16位字符组成");
                        };
                    }else{
                        that.info("lpassword", "", "");
                    }
                    break;
                case "password": 
                    if(that.password){
                        if(that.password.length > 7){ 
                            that.info("password", true, "");
                            if(that.affirm){
                                if(that.affirm === that.password){
                                    that.info("affirm", true, "");
                                }else{
                                    that.info("affirm", false, "与输入密码不符");
                                };
                            }
                        }else{
                            that.info("password", false, "由8至16位字符组成");
                            if(that.affirm){
                                that.info("affirm", false, "请输入正确密码");
                            }
                        };
                    }else{
                        that.info("password", "", "");
                        if(that.affirm){
                            that.info("affirm", false, "请输入正确密码");
                        }
                    }
                    break;
                case "affirm": 
                    if(that.affirm){
                        if(that.v_password){
                            if(that.affirm === that.password){
                                that.info("affirm", true, "");
                            }else{
                                that.info("affirm", false, "与输入密码不符");
                            };
                        }else{
                            that.info("affirm", false, "请输入正确密码");
                        }
                    }else{
                        that.info("affirm", "", "");
                    }
                    break;
                case "verify": 
                    if(that.verify){
                        if(that.verify.length == "6"){ 
                            that.info_verify = "";
                        }else{
                            that.info_verify = "请输入正确的6位验证码";
                        }
                    }else{
                        that.info_verify = "";
                    }
                    break;
            }
         },
        gitVerify () {
            alert(this.ht_verify);
        },
        regInfo () {
            var that = this;
            if(!that.v_lpassword){
                alert("请输入正确格式的旧密码");
                that.$refs.hint_lpassword.setAttribute("class","iconfont icon-icon1");
            }else if(!that.v_password){
                alert("请输入正确的新密码");
                that.$refs.hint_password.setAttribute("class","iconfont icon-icon1");
            }else if(!that.v_affirm){
                alert("请输入正确的确认密码");
                that.$refs.hint_affirm.setAttribute("class","iconfont icon-icon1");
            }else if(that.verify !== that.ht_verify){
                alert("请输入正确的验证码");
            }else{ 
                alert(that.password,that.affirm,that.verify);
                if(that.lpassword === "123456789"){
                    that.info("lpassword", true, "");

                    //-------------------?????

                    that.lpassword === that.password;
                }else{
                    alert("旧密码不正确");
                    that.$refs.hint_lpassword.setAttribute("class","iconfont icon-icon1");
                }
            }
        },
        info (key,start,str){
            var that = this;
            if(start === true || start === false){
                that.$refs['hint_' + key].setAttribute("class","iconfont " + (start ? "icon-duigou" : "icon-icon1") );
            }else{
                that.$refs['hint_' + key].setAttribute("class","iconfont");
            }
            that['v_' + key] = start ? true : false;
            that['info_' + key] = str;
        }
    },
    watch: {
        fullHeight (val) {
            if(val < 480){
                this.$refs.cent.style.top = "auto"
                this.$refs.cent.style.marginTop = "0"
            }else{
                this.$refs.cent.style.top = "50%"
                this.$refs.cent.style.marginTop = "-15rem"
            }
        }
    },
    mounted() {
      const that = this
      window.onresize = () => {//窗口改变
        return (() => {
          that.fullHeight = document.documentElement.clientHeight
        })()
      }
    },
    components: { headTit }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .body{
        height: 100%;
        width: 100%;
        position: relative;
        padding-top: 2.6rem;
        overflow: auto;
        .bgimg{
            position: absolute;
            top:0;
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
        .center{
            height: 100%;
            width: 100%;
            overflow: auto;
            form{
                position: relative;
                z-index: 2;
                width: 24rem;
                height: 30rem;
                top:50%;
                margin: auto;
                margin-top:-15rem;
                .info{
                    width: 24rem;
                    height: 5rem;
                    padding-top: 1.7rem;
                    .input{
                        height: 2rem;
                        color: #333;
                        span{
                            display: inline-block;
                            width: 5.5rem;
                            text-align: right;
                            color: #48644b;
                            font-size: 1.05rem;
                        }
                        input{
                            border: none;
                            height: 2rem;
                            width: 15rem;
                            background: rgba(0,0,0,0);
                            display: inline-block;
                            line-height: 2rem;
                            font-size: 1.25rem;
                            color: #024509;
                        }
                        .icon-icon1{
                            color: #cd0e00;
                        }
                        .icon-duigou{
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
                    ::-webkit-input-placeholder{
                        color: #888;
                        font-size: 1rem;
                    }
                    .err_hint{
                        height: 1rem;
                        color: #bc4949;
                        font-size: 0.85rem;
                        line-height: 1rem;
                        text-indent: 4rem;
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
                    margin: 3rem auto;
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
    }
</style>
