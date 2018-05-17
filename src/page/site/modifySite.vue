<template>
    <div class="body">
        <headTit tit="地址修改" link="保存" operate="siteOperate"></headTit>
        <div class="cent">
            <div class="centUl">
                <div class="list" @click="amPhone">
                    <span>手机号</span>
                    <i class="iconfont icon-webicon213"></i>
                    <b>{{phone}}</b>
                </div>
                <div class="list" @click="amName">
                    <span>名字</span>
                    <i class="iconfont icon-webicon213"></i>
                    <b>{{name}}</b>
                </div>
                <div class="list part" @click="sexstart = !sexstart">
                    <span>性别</span>
                    <i class="iconfont icon-webicon213"></i>
                    <b>{{sex}}</b>
                </div>
                <div class="list" @click="handlerArea">
                    <span>省市区</span>
                    <i class="iconfont icon-webicon213"></i>
                    <b>{{areaString}}</b>
                </div>
                <div class="list" @click="handlerStreet">
                    <span>街道</span>
                    <i class="iconfont icon-webicon213"></i>
                    <b>{{streetString}}</b>
                </div>
                <textarea class="detail-site" placeholder="详细地址">

                </textarea>
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

let index = 0
let index2 = 0
let index3 = 0
// 初始化省
let province = data.map(res => {
  return res.name
})
// 初始化市
let city = data[index].childs.map(res => {
  return res.name
})
// 初始化区
let area = data[index].childs[index2].childs.map(res => {
  return res.name
})
// 初始化街
let street = data[index].childs[index2].childs[index3].childs.map(res => {
  return res.name
})

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
            sexslots:[{values: ['男', '女']}] ,

            areaVisible: false,
            streetVisible: false,
            areaString: '请选择',
            streetString: '请选择',
            slots: [{
                flex: 1,
                values: province,
                className: 'slot1',
                textAlign: 'left'
            }, {
                divider: true,
                content: '-',
                className: 'slot2'
            }, {
                flex: 1,
                values: city,
                className: 'slot3',
                textAlign: 'left'
            }, {
                divider: true,
                content: '-',
                className: 'slot4'
            }, {
                flex: 1,
                values: area,
                className: 'slot5',
                textAlign: 'left'
            }],
            slotstree: [{
                flex: 1,
                values: street,
                className: 'slot1',
                textAlign: 'center'
            }]
        }
    },
    mounted () {
        this.init();
    },
    computed: mapState([
        'detailsData',
        'commentData',
        'shopData'
    ]),
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
        onSexChange(picker, values) { 
            this.sex = values[0];
        },
        handlerArea() {
      this.areaVisible = true
    },
    handlerStreet() {
        if (this.slotstree[0].values.length === 0) {
            this.streetString = '无可选街道'
            return
        }
        this.streetVisible = true
    },
    onValuesChange(picker, values) {
        let one = values[0]
        let two = values[1]
        let three = values[2]
        index = province.indexOf(one)
        if (index >= 0 && province.length > 0) {
            city = data[index].childs.map(res => {
            return res.name
            })
            picker.setSlotValues(1, city)
            two = values[1]
        }

        index2 = city.indexOf(two)
        if (index2 >= 0 && city.length > 0) {
            area = data[index].childs[index2].childs.map(res => {
            return res.name
            })
            picker.setSlotValues(2, area)
            three = values[2]
        }
        index3 = area.indexOf(three)
        if (index >= 0 && index2 >= 0 && index3 >= 0) {
            street = data[index].childs[index2].childs[index3].childs.map(res => {
            return res.name
            })
            this.slotstree[0].values = street
        }

        if (index2 === -1 || index3 === -1) {
            this.streetString = '无可选街道'
        }
        this.areaString = values.join('-')
        },
        onStreeChange(picker, values) {
        this.streetString = values.join('-')
        }

    },
    filters: {
        
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