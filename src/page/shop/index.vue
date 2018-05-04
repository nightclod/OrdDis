<template>
    <div class="subject">
        <div class="summary">
            <label class="checkAll">
                <div class="left">全选</div>
                <div class="right">
                    <input type="checkbox" class="mint-checkbox-input" ref="allPay" @click="allPay" />
                    <span class="mint-checkbox-core"></span>
                </div>
            </label>
            <div class="payNum">
                <i>总额 :</i>
                <span>￥{{payNum}}</span>
            </div>
            <div class="payInfo" @click="">支 付</div>
        </div>
        <ul class="cent">
            <li class="store">
                <ul class="sto_ul">
                    <li class="sto_item">
                        <label>
                            <div class="item_but">
                                <input type="checkbox" class="mint-checkbox-input" :ref="id" @click="actPay(id)" />
                                <span class="mint-checkbox-core"></span>
                            </div>
                            <div class="item_info">
                               123123123123 
                            </div>
                        </label>
                    </li>
                </ul>
            </li>
        </ul>
        <footView />
    </div>
</template>

<script>
import footView from "../../components/footer.vue";
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
     methods:{
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
    components: { footView }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .subject{
        height: 100%;
        width: 100%;
        position: relative;
        overflow: auto;
        background: #ccc;
        .summary{
            position: fixed;
            height: 3rem;
            background: #fff;
            width: 100%;
            bottom: 3.5rem;
            padding-left: 1rem;
            color: #333  ;
            .checkAll{
                display: block;
                width: 3.7rem;
                height: 3rem;
                line-height: 3rem;
                float: left;
                .left{
                    float: left;
                    width: 2.2rem;
                    height: 3rem;
                }
                .right{
                    float: left;
                    width: 1.5rem;
                    height: 3rem;
                }
            }
            .payNum{
                float: left;
                height: 3rem;
                line-height: 3rem;
                width: 9rem;
                margin-left: 1.5rem;
                font-size: 1.1rem;
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
        .cent{
            padding-bottom: 6.5rem;
        }
    }
</style>
