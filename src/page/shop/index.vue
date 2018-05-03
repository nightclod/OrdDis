<template>
    <div class="subject">
        
        <footView />
    </div>
</template>

<script>
import footView from "../../components/footer.vue";
export default {
    name: 'home',
    data () {
        return {
        }
    },
    components: { footView }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .subject{
        overflow: auto;
        background: #ccc;
    }
</style>
