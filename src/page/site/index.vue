<template>
    <div class="body">
        <headTit tit="地址管理" ></headTit>
        <div class="cent">
            <ul>
                <li class="list" v-for="(data) in siteData">
                    <div class="head">
                        <div class="name">{{data.name}}</div>
                        <div class="phone">{{data.phone}}</div>
                    </div>
                    <router-link :to="{path:'/modifySite/' + data.id }" class="site">
                        <div class="content">
                            <div class="middle-inner">
                                <span>{{data.site.province}}{{data.site.city}}{{data.site.county}}{{data.site.town}}{{data.site.detail}}</span>
                            </div>
                        </div>
                        <div class="compile">
                            <i class="iconfont icon-webicon213"></i>
                        </div>
                    </router-link>
                    <div class="operate">
                        <label class="default" @click="defaultSite(data.id)">
                            <div class="left">
                                <div :class="data.default ? 'act check' : 'act'" >
                                    <i class="iconfont icon-xuanzhong"></i>
                                </div>
                            </div>
                            <div class="right">选择默认</div>
                        </label>
                        <div class="delete">
                            <span @click="deleteSite(data.id)">
                                <i class="iconfont icon-shanchu1"></i>
                                <span>删除</span>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import headTit from "../../components/headtit.vue";
import Base from "../../components/base.js";
import { mapState, mapActions } from 'vuex';
export default {
    name: 'person',
    data () {
        return {
           
        }
    },
    mounted () {
        this.init();
    },
    computed: {
        ...mapState([
            'siteData' 
        ])
    },
    methods:{
        ...mapActions([
            'getSiteData',
            'defaultSiteData',
            'deleteSiteData'
  		]),
        init(){ 
            if( !Base.getCookie("ordDisCooike") ){
                this.$router.push({path:'/login'});
            }
            this.getSiteData(5);
        },
        defaultSite(id){
            var that = this;
        },
        deleteSite(id){
            var that = this;
            for(var i = 0; i < that.siteData.length; i ++){
                if(that.siteData[i].id == id){
                    that.siteData.splice(i, 1);
                    break;
                }
            }
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
            .list{
                background-color: #fff;
                margin-bottom: 1rem;
                color: #444;
                .head{
                    height: 2rem;
                    line-height: 2rem;
                    padding: 0 .5rem;
                    font-size: 1.05rem;
                    .name{
                        float: left;
                    }
                    .phone{
                        float: right;
                    }
                }
                .site{
                    height: 3rem;
                    border-bottom: solid 1px #eee;
                    color: #444;
                    overflow: hidden;
                    .content{
                        float: left;
                        height: 3rem;
                        width: calc(100% - 2rem);
                        padding-left: .8rem;
                        font-size: .95rem;
                        display: table;
                        .middle-inner{
                            display: table-cell; 
                            vertical-align:middle; 
                            text-align:left;
                        }
                    }
                    .compile{
                        float: right;
                        height: 3rem;
                        width: 2rem;
                        line-height: 3rem;
                        text-align: center;
                        color: #607d8b;
                    }
                }
                .operate{
                    height: 2.4rem;
                    .default{
                        height: 2.4rem;
                        float: left;
                        padding-left: .6rem;
                        .left{
                            float: left;
                            width: 1.5rem;
                            height: 2.4rem;
                            line-height: 2.4rem;
                            .act{
                                width: 18px;
                                height: 18px;
                                border-radius: 3px;
                                border: solid 1px #ccc;
                                margin-top: calc(1.2rem - 9px);
                                text-align: center;
                                line-height: 17px;
                                color: #fff;
                            }
                            .check{
                                border-color: #2196F3;
                                background: #2196F3;
                            }
                        }
                        .right{
                            float: left;
                            height: 2.4rem;
                            line-height: 2.6rem;
                            margin-left: .3rem;
                        }
                    }
                    .delete{
                        float: right;
                        height: 2.4rem;
                        line-height: 2.4rem;
                        margin-right: 1rem;
                        color: #888;
                    }
                }
            }

        }
                
    }
</style>