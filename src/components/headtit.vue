<template>
    <div class="head">
        <i class="iconfont icon-fanhui return" onClick="javascript :history.back(-1);"></i>
        <div class="tit">{{tit}}</div>
        <router-link :to="name" class="info">{{link}}</router-link>
        <div class="xian"></div>
    </div>
</template>

<script>

export default {
    data () {
        return {
        }
    },
    props: {
        tit: String,
        link: String,
        name: String
    },
    mounted () {
    },
    methods:{
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .head{
        position: fixed;
        width: 100%;
        height: 2.6rem;
        top: 0;
        background-color: rgba(0,0,0,0);
        z-index: 2;
        line-height: 2.6rem;
        text-align: center;
        color: #333;
        .return{
            display: block;
            float: left;
            width: 10%;
            height: 2.6rem;
            font-size: 1.2rem;
        }
        .tit{
            float: left;
            width: 70%;
            height: 2.6rem;
            padding-left: 10%;
            font-size: 1.2rem;
            font-family: '楷体';
            font-weight: 700;
        }
        .info{
            color: #333;
            float: left;
            width: 20%;
            height: 2.6rem;
        }
        .xian{
            position: absolute;
            width: 100%;
            height: 1px;
            bottom: 0;
            background: rgba($color: #999, $alpha: 0.3)
        }
    }
</style>
