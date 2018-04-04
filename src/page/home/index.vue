<template>
    <div class="subject">
        <div class="search">
            <input type="text" name="search" class="seek" />
        </div>
        <div>

        </div>
        <div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
        msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .subject{
        overflow: auto;
        .search{
            height: 150px;
        }
    }
</style>
