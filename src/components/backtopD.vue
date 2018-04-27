<template>
    <div class="backtop" ref="backtop" @click="backtop">
        <i class="iconfont icon-huidaodingbu"></i>
    </div>
</template>

<script>

export default {
    data () {
        return { 
         }
    },
    mounted () {
        document.getElementById("cent").addEventListener('scroll', this.handleScroll);
    },
    methods:{
        handleScroll () {
            var that = this;
            var scrollTop = document.getElementById("cent").scrollTop;
            if(scrollTop >= 250 ){
                that.$refs.backtop.style.bottom = "5rem"
            }else{
                that.$refs.backtop.style.bottom = "-3rem"
            }
        },
        backtop () {
            var timer = setInterval(function(){
                var currentPosition = document.getElementById("cent").scrollTop;
                currentPosition = parseInt(currentPosition / 2);
                if (currentPosition > 0) {
                    document.getElementById("cent").scrollTo(0, currentPosition);
                }
                else {
                    document.getElementById("cent").scrollTo(0, 0);
                    clearInterval(timer);
                    timer = null;
                }
            },20);
        }
    },
    destroyed () {
        if(document.getElementById("cent")){
            document.getElementById("cent").removeEventListener('scroll', this.handleScroll);
        }
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
        bottom: -3rem;
        right: 2.5rem;
        text-align: center;
        line-height: 3rem;
        transition:.2s;
        i{
            font-size: 1.8rem;
        }
    }
</style>
