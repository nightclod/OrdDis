<template>
    <div class="footer" ref="foot">
        <ul>
            <li>
                <router-link :to="{name:'home'}" exact-active-class="act"> 
                    <i class="iconfont icon-shouye"></i>
                    <div>首页</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'list', params:{ info: '' }}"  exact-active-class="act"> 
                    <i class="iconfont icon-chazhaobiaodanliebiao"></i>
                    <div>列表</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'shop'}"  exact-active-class="act"> 
                    <i class="iconfont icon-gouwuche"></i>
                    <div>购物车</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'mine'}"  exact-active-class="act"> 
                    <i class="iconfont icon-wode"></i>
                    <div>我的</div>
                </router-link>
            </li> 
        </ul>
    </div>
</template>

<script>

export default {
    data () {
        return {
        }
    },
    mounted () {
    },
    methods:{
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .footer{
        position: fixed;
        width: 100%;
        height: 3.5rem;
        bottom: 0;
        background-color: rgba(238,238,238,.98);
        z-index: 3;
        ul{
            li{
                float: left;
                width: 25%;
                text-align: center;
                padding-top: 0.3rem;
                a{color: #666;}
                i{
                    display: block;
                    height: 1.9rem;
                    font-size: 1.5rem
                }
                div{font-size: .8rem}
            }
            .act{color: #03a9f4;}
        }
    }
</style>
