<template>
    <div class="body">
        <div class="img">
            <img src="../../assets/img/logbg.jpg" class="logbg">
        </div>
        
        <form action="">

        </form>
    </div>
</template>

<script>

export default {
    name: 'mine',
    data () {
        return {
        
        }
    },
    components: {  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .body{
        height: 100%;
        width: 100%;
        position: relative;
        text-align: center;
        overflow: hidden;
        $width : 50vw;
        .img{
            display: inline-block;
            .logbg{
                position: relative;
                margin-left: $width;
                left: -50%;
                min-height: 100%;
                min-width: 100% ;
                filter: url(../../assets/img/logbg.jpg); /* FireFox, Chrome, Opera */
                -webkit-filter: blur(8px); /* Chrome, Opera */
                -moz-filter: blur(8px);
                -ms-filter: blur(8px);    
                filter: blur(8px);
                filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false); /* IE6~IE9 */
                top: 0;
            }
        }
        
    }
</style>
