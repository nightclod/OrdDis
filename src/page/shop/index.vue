<template>
    <div class="subject">
        <headTit tit="" link="订单管理" name="shop"></headTit>
        <ul class="cent">
            <li class="store"  v-for="(item) in shopData">
                <div class="sto_head">
                    <label class="sto_checkAll">
                        <input type="checkbox" class="mint-checkbox-input" :ref="'itemAllPay' + item.shop.id" @click="itemAllPay(item.shop.id)" />
                        <span class="mint-checkbox-core"></span>
                    </label>
                     <router-link :to="{path:'/details/' + item.shop.id  }">
                        <span>{{ item.shop.name }}</span>
                        <i class="iconfont icon-webicon213"></i>
                     </router-link>
                </div>
                <ul class="sto_ul">
                    <li class="sto_item" v-for="(data) in item.product">
                        <label class="item_but">
                            <input type="checkbox" class="mint-checkbox-input" :ref="data.id" @click="actPay(data.id, item.shop.id)" />
                            <span class="mint-checkbox-core"></span>
                        </label>
                        <div class="item_info">
                            <img :src="data.img" alt="" class="item_img"/>
                            <div class="item_data">
                                <h3>{{ data.name }}</h3>
                                <div class="item_num">
                                    <div class="money">￥{{ data.money }}<span>/{{ data.unit }}</span></div>
                                    <button class="minus"><i class="iconfont icon-subtract"></i></button>
                                    <div class="number">{{ data.num }}</div>
                                    <button class="add" ><i class="iconfont icon-add"></i></button>  
                                </div>
                            </div>
                        </div>
                        <div class="delete"><i class="iconfont icon-icon1"></i></div>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="summary">
            <label class="checkAll">
                <div class="left">
                    <input type="checkbox" class="mint-checkbox-input" ref="allPay" @click="allPay" />
                    <span class="mint-checkbox-core"></span>
                </div>
                <div class="right">全选</div>
            </label>
            <div class="payNum">
                <i>总额 :</i>
                <span>￥{{payNum}}</span>
            </div>
            <div class="payInfo" @click="">支 付</div>
        </div>
        <footView />
    </div>
</template>

<script>
import footView from "../../components/footer.vue";
import headTit from "../../components/headtit.vue";
import { mapState, mapActions } from 'vuex';
export default {
    name: 'home',
    data () {
        return {
            value: [],
            id: 456,
            allId: false,
            payNum: 0
        }
    },
    mounted () {
        this.init();
    },
    computed: mapState([
        'shopData' 
    ]),
    methods:{
        ...mapActions([
            'getShopData'
        ]),
        init () {
            this.getShopData(5);
        },
        itemAllPay (key){
            var that = this;
            console.log(that.$refs["itemAllPay" + key][0].checked)
        },
        actPay (key) {
            var that = this;
            console.log(that.$refs[key].checked, key);
        },
        allPay () {
            var that = this;
            if(that.$refs.allPay.checked){
                that.allId = true
            }else{
                that.allId = false
            }
            
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
                        display: block;
                        float: left;
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
                            line-height: 6rem;
                            float: left;
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
                                    width: 13rem;
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
                                        width: 3rem;
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
