<template>
    <div class="body">
        <headTit tit="地址管理" ></headTit>
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
                <div class="list part" @click="amName">
                    <span>名字</span>
                    <i class="iconfont icon-webicon213"></i>
                    <b>{{name}}</b>
                </div>
                <div class="list" @click="sexstart = !sexstart">
                    <span>性别</span>
                    <i class="iconfont icon-webicon213"></i>
                    <b>{{sex}}</b>
                </div>
                <div class="list" @click="openPicker">
                    <span>生日</span>
                    <i class="iconfont icon-webicon213"></i>
                    <b>{{birthday | formatdate}}</b>
                </div>
                <mt-popup v-model="sexstart" position="bottom" style="width:100%">  
                    <mt-picker :slots="slots" @change="onValuesChange" :visible-item-count="3" style="width:100%"></mt-picker>  
                </mt-popup>
                <mt-datetime-picker ref="picker" type="date" v-model="birthday" :startDate="startDate" :endDate="endDate" >
                </mt-datetime-picker>
            </div>
        </div>
    </div>
</template>

<script>
import headTit from "../../../components/headtit.vue";
import Base from "../../../components/base.js";
import { MessageBox } from 'mint-ui';
export default {
    name: 'person',
    data () {
        return {
            name: "姓名123",
            account: "1589888",
            phone: "17865923008",
            Nphone: "",
            sex: "男",
            sexstart: false,
            startDate : new Date("1960/1/1"),
            birthday:  new Date("2000/1/1"),
            endDate : new Date(),
            birstart: false,
            slots:[{values: ['男', '女']}] 
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
            var that = this;
            MessageBox.prompt ('请输入新的手机号',{
                confirmButtonText:'提交',
                inputType:"number",
                inputValidator:function(v){
                    if(v == null){ 
                        return true; 
                    }
                    return /^[1][3,4,5,7,8][0-9]{9}$/.test(v);
                },
                inputErrorMessage:'请输入正确的手机号',
            }).then((val) => {
                that.Nphone = val.value;
                that.phone = val.value;
            }, () => {  
                
            }) 
        },
        amName () {
            var that = this;
            MessageBox.prompt ('请输入新的名字',{
                confirmButtonText:'提交',
                inputType:"text",
                inputValidator:function(v){
                    if(v == null){ 
                        return true;
                    }
                    return /^[0-9A-Za-z\u4E00-\u9FA5]{6,10}$/.test(v);
                },
                inputErrorMessage:'由6至10位的汉字、数字、字母组成',
            }).then((val) => {  
                that.name = val.value;
                
            }, () => {
                
            }) 
        },
        onValuesChange(picker, values) { 
            this.sex = values[0];
        },
        openPicker() {
            this.$refs.picker.open();
        }

    },
    filters: {
        formatdate(time){
            var str = (time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate())
            return str;
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