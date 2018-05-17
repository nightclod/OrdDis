<template>
    <div class="subject">
        <headTit tit="" link="订单管理" name="shop"></headTit>
        <ul class="cent">
            <li class="store" v-for="(item) in shopData">
                <div class="sto_head">
                    <div class="sto_checkAll">
                        <div :class="item.act ? 'act check' : 'act'" @click="actItemPay(item.id, item.product)">
                            <i class="iconfont icon-xuanzhong"></i>
                        </div>
                    </div>
                     <router-link :to="{path:'/details/' + item.id  }">
                        <span>{{ item.name }}</span>
                        <i class="iconfont icon-webicon213"></i>
                     </router-link>
                </div>
                <ul class="sto_ul">
                    <li class="sto_item" v-for="(data) in item.product">
                        <div class="item_but">
                            <div :class="data.act ? 'act check' : 'act'" @click="actPay(item.id, data.id, item.product)">
                                <i class="iconfont icon-xuanzhong"></i>
                            </div>
                        </div>
                        <div class="item_info">
                            <img :src="data.imgUrl" alt="" class="item_img"/>
                            <div class="item_data">
                                <h3>{{ data.name }}</h3>
                                <div class="item_num">
                                    <div class="money">￥{{ data.money }}<span>/{{ data.unit }}</span></div>
                                    <button class="minus" @click="changeNum(item.id, data.id, data.number, 'minus')"><i class="iconfont icon-subtract"></i></button>
                                    <div class="number">{{ data.number }}</div>
                                    <button class="add" @click="changeNum(item.id, data.id, data.number, 'add')" ><i class="iconfont icon-add"></i></button>  
                                </div>
                            </div>
                        </div>
                        <div class="delete" @click="deleteItem(item.id, data.id)"><i class="iconfont icon-icon1"></i></div>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="summary">
            <label class="checkAll" @click="allPay">
                <div class="left">
                    <div :class="allId ? 'act check' : 'act'" @click="">
                        <i class="iconfont icon-xuanzhong"></i>
                    </div>
                </div>
                <div class="right">全选</div>
            </label>
            <div class="payNum">
                <i>总额 :</i>
                <span>￥{{payNum}}</span>
            </div>
            <div class="payInfo" @click="payInfo">支 付</div>
        </div>
        <footView />
    </div>
</template>

<script>
import footView from "../../components/footer.vue";
import headTit from "../../components/headtit.vue";
import Base from "../../components/base.js";
import { mapState, mapActions } from 'vuex';
export default {
    name: 'home',
    data () {
        return {
            value: [],
            id: 456,
            allId: false,
            payNum: 0,
            start: false
        }
    },
    mounted () {
        this.init();
    },
    computed: {
            ...mapState([
                'shopData' 
        ])
    },
    methods:{
        ...mapActions([
            'getShopData'
        ]),
        init () {
            if( !Base.getCookie("ordDisCooike") ){
                this.$router.push({path:'/login'});
            }
            this.getShopData(5);
        },
        loopIf (key, id, data, cb ) {
            for(var i = 0; i < data.length; i ++){
                if(data[i][key] == id){
                    cb(data[i], i);
                    break;
                }
            }
        },
        allPay () {
            var that = this;
            that.allId = !that.allId;
            for(var i = 0; i < that.shopData.length; i ++){
                that.shopData[i].act = that.allId;
                that.itemPay(that.shopData[i].id, that.shopData[i].product, that.allId);
            }
            that.rental();
        },
        actItemPay(key, product){
            var that = this;
            that.loopIf("id", key, that.shopData, function(data){
                data.act = !data.act;
                that.itemPay(key, product, data.act);
            });
            
            that.detectionAllPay ();
            that.rental();
        },
        itemPay (key, product, start){
            var that = this;
            for(var i = 0; i < product.length; i ++){
               product[i].act = start;
            }
        },
        actPay ( key, id, product ) {
            var that = this;
            that.loopIf("id", id, product, function(data){
                data.act = !data.act
            });
            that.listPay( key, product );
            that.detectionAllPay ();
            that.rental();
        },
        listPay ( key, product ) {
            var that = this,
                start = true;
            that.loopIf("act", false, product, function(){
                start = false;
            });
            that.loopIf("id", key, that.shopData, function(data){
                data.act = start;
            });
        },
        detectionAllPay (){
            var that = this,
                start = true;
            that.loopIf("act", false, that.shopData, function(){
                start = false;
            });
            that.allId = start;
        },
        changeNum(key, id, number ,sat){
            var that = this;
            that.loopIf("id", key, that.shopData, function(data){
                that.loopIf("id", id, data.product,function(info){
                    if(sat == "minus"){
                        info.number = (number == 1) ? 1 : --number;
                    }else if(sat == "add"){
                        info.number = ++number;
                    }
                    that.rental();
                })
            });
        },
        rental(){
            var that = this,
                payNum = 0;
            for(var i = 0; i < that.shopData.length; i ++){
                for(var j = 0; j < that.shopData[i].product.length; j ++){
                    if(that.shopData[i].product[j].act){
                        payNum += that.shopData[i].product[j].number * that.shopData[i].product[j].money
                    }
                }
            }
            that.payNum = payNum;
        },
        deleteItem(key, id){
            //发出请求。回传成功。执行下一步
            var that = this;
            that.loopIf("id", key, that.shopData, function(data, i){
                that.loopIf("id", id, data.product,function(info, j){
                    data.product.splice(j, 1);
                    if(data.product.length){
                        that.listPay(data.id, data.product);
                    }else{
                        that.shopData.splice(i, 1);
                    }
                })
            });
            that.detectionAllPay ();
            that.rental();
        },
        payInfo (){
            var that = this;
            var info = [];
            for(var i = 0; i < that.shopData.length; i ++){
                var start = false,
                    data = [];
                for(var j = 0; j < that.shopData[i].product.length; j ++){
                    if(that.shopData[i].product[j].act){
                        data.push( that.shopData[i].product[j] );
                        that.shopData[i].product.splice(j --, 1);
                        start = true;
                    }
                }
                if(start){
                    info.push({
                        id: that.shopData[i].id,
                        name: that.shopData[i].name,
                        product: data
                    });
                }
                if(!that.shopData[i].product.length){
                    that.shopData.splice(i --, 1);
                }
            }
            alert("看控制台的支付信息");
            console.log(info);
        }
    },
    watch:{
        shopData: function(value){
            //能检测到的属性变化
             for(let i = 0; i < value.length; i ++) {
                if(!(value[i].act === true || value[i].act === false)){
                    this.$set(value[i], 'act', false);
                }
                for(let j = 0; j < value[i].product.length; j ++) {
                    if(!(value[i].product[j].act === true || value[i].product[j].act === false)){
                        this.$set(value[i].product[j], 'act', false);
                    }
                }
            }
            return value;
        }
    },
    components: { footView, headTit }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .subject{
        height: 100%;
        width: 100%;
        position: relative;
        overflow: auto;
        background: #eee;
        padding-top:2.6rem;
        padding-bottom: 6.5rem;
        .cent{
            height: 100%;
            overflow: auto;
            .store{
                background-color: #fff;
                padding-left: .6rem;
                margin-bottom: 1rem;
                .sto_head{
                    height: 2.6rem;
                    line-height: 2.6rem;
                    border-bottom: solid 1px #eee;
                    .sto_checkAll{
                        float: left;
                        height: 2.6rem;
                        .act{
                            width: 20px;
                            height: 20px;
                            border-radius: 10px;
                            border: solid 1px #ccc;
                            margin-top: calc(1.3rem - 10px);
                            text-align:center;
                            line-height: 20px;
                            color: #fff;
                        }
                        .check{
                            border-color: #2196F3;
                            background: #2196F3;
                        }
                    }
                    a{
                        height: 2.6rem;
                        float: left;
                        margin-left: 1rem;
                        color: #333;
                    }
                }
                .sto_ul{
                    .sto_item{
                        height: 6rem;
                        border-bottom: solid 1px #efefef;
                        .item_but{
                            height: 6rem;
                            float: left;
                            .act{
                                width: 20px;
                                height: 20px;
                                border-radius: 10px;
                                border: solid 1px #ccc;
                                margin-top: calc(3rem - 10px);
                                text-align:center;
                                line-height: 20px;
                                color: #fff;
                            }
                            .check{
                                border-color: #2196F3;
                                background: #2196F3;
                            }
                        }
                        .item_info{
                            float: left;
                            overflow: hidden;
                            height: 6rem;
                            margin-left: 1rem;
                            .item_img{
                                width: 4rem;
                                height: 4rem;
                                float: left;
                                margin-top: 1rem;
                            }
                            .item_data{
                                float: left;
                                margin-left: 2rem;
                                h3{
                                    font-size: 1.2rem;
                                    line-height: 1.2rem;
                                    height: 2.2rem;
                                    padding-top:1rem;
                                }
                                .item_num{
                                    overflow: hidden;
                                    height: 3rem;
                                    min-width: 13rem;
                                    .money{
                                        float: left;
                                        height: 3rem;
                                        color: #ff5722;
                                        font-size: 1.2rem;
                                        line-height: 3rem;
                                        width: 7rem;
                                        span{
                                            font-size: .7rem;
                                            color: #FF5722;
                                        }
                                    }
                                    button{
                                        display: block;
                                        float: left;
                                        height: 1.5rem;
                                        width: 1.5rem;
                                        margin-top: 0.75rem;
                                        border-radius: 0.8rem;
                                        border: none;
                                        background:#03A9F4;
                                        color: #fff;
                                        padding: 0;
                                        text-align: center;
                                    }
                                    .number{
                                        float: left;
                                        font-size: 1.1rem;
                                        padding:0 .5rem;
                                        color: #333;
                                        min-width: 3rem;
                                        text-align: center;
                                        line-height: 3rem;
                                    }
                                }
                            }
                        }
                        .delete{
                            float: right;
                            color: #bdbdbd;
                            margin-right: 0.6rem;
                            margin-top: .2rem;
                            i{
                                font-size: 1rem;
                            }
                        }
                    }
                }
            }
        }
        .summary{
            position: fixed;
            height: 3rem;
            background: #fff;
            width: 100%;
            bottom: 3.5rem;
            padding-left: 1rem;
            color: #333  ;
            border-top: solid 1px #eee;
            .checkAll{
                display: block;
                width: 4rem;
                height: 3rem;
                line-height: 3rem;
                float: left;
                .left{
                    float: left;
                    width: 1.5rem;
                    height: 3rem;
                    .act{
                        width: 20px;
                        height: 20px;
                        border-radius: 10px;
                        border: solid 1px #ccc;
                        margin-top: calc(1.5rem - 10px);
                        text-align:center;
                        line-height: 20px;
                        color: #fff;
                    }
                    .check{
                        border-color: #2196F3;
                        background: #2196F3;
                    }
                }
                .right{
                    float: left;
                    width: 2.2rem;
                    height: 3rem;
                    line-height: 3.2rem;
                    margin-left: .3rem;
                }
            }
            .payNum{
                float: left;
                height: 3rem;
                line-height: 3rem;
                width: 11rem;
                margin-left: 2rem;
                font-size: 1.1rem;
                text-align: right;
                span{
                    color: #f44336;
                }
            }
            .payInfo{
                width: 7rem;
                height: 3rem;
                float: right;
                background: #f44336;
                color: #fff;
                font-size: 1.3rem;
                line-height: 3rem;
                text-align: center;
                font-family: "楷体";
            }
        }
    }
</style>
