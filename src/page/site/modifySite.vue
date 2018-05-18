<template>
    <div class="body">
        <headTit tit="地址修改" link="保存" operate="siteOperate"></headTit>
        <div class="cent">
            <div class="centUl">
                <div class="list" @click="amPhone">
                    <span>手机号</span>
                    <i class="iconfont icon-webicon213"></i>
                    <b>{{soleSiteData.phone || ""}}</b>
                </div>
                <div class="list" @click="amName">
                    <span>名字</span>
                    <i class="iconfont icon-webicon213"></i>
                    <b>{{soleSiteData.name || ""}}</b>
                </div>
                <div class="list part" @click="sexstart = true">
                    <span>性别</span>
                    <i class="iconfont icon-webicon213"></i>
                    <b>{{soleSiteData.sex || ""}}</b>
                </div>
                <div class="list" @click="areaVisible = true">
                    <span>省市区</span>
                    <i class="iconfont icon-webicon213"></i>
                    <b>{{soleSiteData.siteName || ""}}</b>
                </div>
                <div class="list" @click="handlerStreet">
                    <span>街道</span>
                    <i class="iconfont icon-webicon213"></i>
                    <b>{{soleSiteData.siteNum[3] || ""}}</b>
                </div>
                <textarea class="detail-site" placeholder="详细地址">{{soleSiteData.detail}}</textarea>
                <mt-popup v-model="sexstart" position="bottom" style="width:100%">  
                    <mt-picker :slots="sexslots" @change="onSexChange" :visible-item-count="3" style="width:100%"></mt-picker>  
                </mt-popup>
                <mt-popup v-model="areaVisible" class="area-class" position="bottom">
                    <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
                </mt-popup>
                <mt-popup v-model="streetVisible" class="area-class" position="bottom">
                    <mt-picker :slots="slotstree" @change="onStreeChange"></mt-picker>
                </mt-popup>
            </div>
        </div>
    </div>
</template>

<script>
import headTit from "../../components/headtit.vue";
import Base from "../../components/base.js";
import data from '../../assets/data/data.json';
import { mapState, mapActions } from 'vuex';
import { MessageBox } from 'mint-ui';

export default {
    name: 'person',
    data () {
        return {
            sexstart: false,
            areaVisible: false,
            streetVisible: false,
            areaString: '请选择',
            streetString: '请选择',
            
            sexslots:[{values: ['男', '女']}],
            slots: [],
            slotstree: [],

            index1 : 0,
            index2 : 0,
            index3 : 0,
            index4 : 0,
            province : [],
            city: [],
            area: [],
            street: []
        }
    },
    mounted () {
        this.init();
    },
    computed: {
        ...mapState([
            'soleSiteData'
        ])
    },
    methods:{
        ...mapActions([
            'getSoleSiteData'
  		]),
        init() { 
            if( !Base.getCookie("ordDisCooike") ){
                this.$router.push({path:'/login'});
            }
            console.log(data,"----1-----");
            this.getSoleSiteData(this.$router.history.current.params.num);
            
        },
        dataInit(){
            var that = this;
            let one = that.soleSiteData.siteNum[0]
            let two = that.soleSiteData.siteNum[1]
            let three = that.soleSiteData.siteNum[2]
            let four = that.soleSiteData.siteNum[3]

             // 初始化省
            that.province = data.map(res => {
                return res.name
            });
            // 初始化市
            that.index1 = that.province.indexOf(one);
            that.city = data[that.index1].childs.map(res => {
                return res.name
            });
            // 初始化区
            that.index2 = that.city.indexOf(two);
            that.area = data[that.index1].childs[that.index2].childs.map(res => {
                return res.name
            });
            // 初始化街
            that.index3 = that.area.indexOf(three);
            that.street = data[that.index1].childs[that.index2].childs[that.index3].childs.map(res => {
                return res.name
            })
            that.slots = [{
                flex: 1,
                values: that.province,
                className: 'slot1',
                textAlign: 'left',
                defaultIndex: that.index1
            }, {
                divider: true,
                content: '-',
                className: 'slot2'
            }, {
                flex: 1,
                values: that.city,
                className: 'slot3',
                textAlign: 'left',
                defaultIndex: that.index2
            }, {
                divider: true,
                content: '-',
                className: 'slot4'
            }, {
                flex: 1,
                values: that.area,
                className: 'slot5',
                textAlign: 'left',
                defaultIndex: that.index3
            }];
            that.index4 = that.street.indexOf(four);
            that.slotstree = [{
                flex: 1,
                values: that.street,
                className: 'slot1',
                textAlign: 'center',
                defaultIndex: that.index4
            }]
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
                if(val.value){
                    that.soleSiteData.phone = val.value;
                }
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
                    return /^[0-9A-Za-z\u4E00-\u9FA5]{2,5}$/.test(v);
                },
                inputErrorMessage:'由2至5位的汉字、数字、字母组成',
            }).then((val) => {
                if(val.value){
                    that.soleSiteData.name = val.value;
                }
            }, () => {
                
            }) 
        },
        onSexChange(picker, values) {
            this.soleSiteData.sex = values[0];
        },
        handlerStreet() {
            var that = this;
            if (this.slotstree[0].values.length === 0) {
                this.soleSiteData.siteNum[3] = '无可选街道'
                return
            }
            that.streetVisible = true
        },
        onValuesChange(picker, values) {
            if(!values.length){
                return null;
            }
            var that = this;
            let one = values[0]
            let two = values[1]
            let three = values[2]
            that.index1 = that.province.indexOf(one)
            if (that.index1 >= 0 && that.province.length > 0) {
                that.city = data[that.index1].childs.map(res => {
                    return res.name
                })
                picker.setSlotValues(1, that.city)
                two = values[1]
            }

            that.index2 = that.city.indexOf(two)
            if (that.index2 >= 0 && that.city.length > 0) {
                that.area = data[that.index1].childs[that.index2].childs.map(res => {
                    return res.name
                })
                picker.setSlotValues(2, that.area)
                three = values[2]
            }
            that.index3 = that.area.indexOf(three)
            if (that.index1 >= 0 && that.index2 >= 0 && that.index3 >= 0) {
                that.street = data[that.index1].childs[that.index2].childs[that.index3].childs.map(res => {
                    return res.name
                })
                that.slotstree[0].values = that.street
            }
            if (that.index2 === -1 || that.index3 === -1) {
                that.soleSiteData.siteNum[3] = '无可选街道'
            }
            that.soleSiteData.siteName = values.join('-')
        },
        onStreeChange(picker, values) {
            this.soleSiteData.siteNum[3] = values.join('-')
        }
    },
    watch: {
        soleSiteData(val){
            console.log(val);
            this.dataInit();
            return val
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
                        width: 70vw;
                        text-align: right;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
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
                .area-class {
                    width: 100%;
                    height: 30%;
                }
                .detail-site{
                    height: 5rem;
                    line-height: 3rem;
                    background: #fff;
                    border-bottom: solid 1px #eee;
                    padding-left: 2rem;
                    color: #666;
                    font-size: 1.1rem;
                    width: 100%;
                    border: none;
                    outline: none;
                    resize: none;
                }
            }
        }
                
    }
</style>