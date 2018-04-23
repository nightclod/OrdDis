<template>
    <div class="backtop" ref="backtop" @click="backtop">
        <i class="iconfont icon-huidaodingbu"></i>
    </div>
</template>

<script>

export default {
    data () {
        return { }
    },
    mounted () {
        document.getElementById("app").addEventListener('scroll', this.handleScroll);
    },
     methods:{
        handleScroll () {
            var scrollTop = document.getElementById("app").scrollTop;
            if(scrollTop >= 250 ){
                this.$refs.backtop.style.bottom = "5rem"
            }else{
                this.$refs.backtop.style.bottom = "-1rem"
            }
        },
        backtop () {
            var timer = setInterval(function(){
                var currentPosition = document.getElementById("app").scrollTop;
                currentPosition = parseInt(currentPosition / 2);
                if (currentPosition > 0) {
                    document.getElementById("app").scrollTo(0, currentPosition);
                }
                else {
                    document.getElementById("app").scrollTo(0, 0);
                    clearInterval(timer);
                    timer = null;
                }
            },20);
        }
    },
    destroyed () {
        document.getElementById("app").removeEventListener('scroll', this.handleScroll);
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .backtop{
        position: fixed;
        width: 3rem;
        height: 3rem;
        border-radius: 1.5rem;
        background: rgba(0, 0, 0, .4);
        color: #fff;
        bottom: -1rem;
        right: 2.5rem;
        text-align: center;
        line-height: 3rem;
        transition:.2s;
        i{
            font-size: 1.8rem;
        }
    }
</style>
