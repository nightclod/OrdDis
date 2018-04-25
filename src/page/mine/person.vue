<template>
    <div class="body">
        <headTit tit="修改信息"></headTit>
        <div class="cent">
            <div class="centUl">
                <div class="list part head">
                    <span>头像</span>
                    <i class="iconfont icon-webicon213"></i>
                    <b><img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=72949495,415020620&fm=202&mola=new&crop=v1" alt=""></b>
                </div>
                <div class="list" @click="amPhone">
                    <span>手机号</span>
                    <i class="iconfont icon-webicon213"></i>
                    <b>{{phone}}</b>
                </div>
                <div class="list part">
                    <span>名字</span>
                    <i class="iconfont icon-webicon213"></i>
                    <b>{{name}}</b>
                </div>
                <div class="list">
                    <span>性别</span>
                    <i class="iconfont icon-webicon213"></i>
                    <b>{{sex}}</b>
                </div>
                <div class="list">
                    <span>生日</span>
                    <i class="iconfont icon-webicon213"></i>
                    <b>{{birthday}}</b>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headTit from "../../components/headtit.vue";
import Base from "../../components/base.js";
import { MessageBox } from 'mint-ui';
export default {
    name: 'person',
    data () {
        return {
            name: "姓名123",
            account: "1589888",
            phone: "17865923008",
            sex: "男",
            birthday: "2015-10-10"
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
        amPhone() {
            MessageBox.prompt('', '测试', {inputPlaceholder: '测试文字'}).then(({ value, action }) => {
                console.log(value)
            })
        //      let that = this;
        // MessageBox({
        //     message: `<div class="homeTelPhone">
        //             <input type="tel" class="home_input" placeholder="联系方式" ref=homeTel @blur="homeTel()" maxlength="11" v-model="inputtext.phone"/>
        //             <span class="home_num_error" v-show="isShowPhoneError"  style="font-size:.26rem; box-shadow: 0 0 0 0;">请输入正确的联系方式</span>
        //         </div>`,
        //     confirmButtonText:'提交'
        // }).then(action => {
        //     that.$router.push({ path: '/home' });
        // })
            // MessageBox.prompt('请输入姓名').then(({ value, action }) => {

            // });
        }
    },
    components: { headTit }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .body{
        height: 100%;
        padding-top:2.6rem;
        .cent{
            height: 100%;
            overflow: auto;
            background: #f5f5f5;
            .centUl{
                min-height: 100%;
                padding-top: 0.4rem;
                .list{
                    display: block;
                    height: 3rem;
                    line-height: 3rem;
                    background: #fff;
                    border-bottom: solid 1px #eee;
                    padding-left: 2rem;
                    color: #333;
                    font-size: 1.1rem;
                    span{
                        display: block;
                        float: left;
                    }
                    b{
                        display: block;
                        float: right;
                        padding-right: 1rem;
                    }
                    i{
                        display: block;
                        float: right;
                        height: 3rem;
                        padding-right: 1rem;
                        line-height: 3rem;
                        color: #888;
                    }
                }
                .part{
                    margin-bottom: 0.7rem;
                }
                .head{
                    height: 5rem;
                    line-height: 5rem;
                    b{
                        img{
                            height: 4rem;
                            width: 4rem;
                            border-radius: 2rem;
                            margin-top:0.5rem;
                        }
                    }
                    i{
                        line-height: 5rem;
                        height: 5rem;
                    }
                }
            }
        }
                
    }
</style>
