<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import './assets/iconfont/iconfont.css'
    import './assets/iconfont/iconfont.js'
    export default {
        name: 'App'
    }
</script>

<style>
/* 全局设置 */
 @charset "utf-8";
*{box-sizing:border-box;}
body,html{ width:100%; height:100%;overflow: auto;margin: 0}
html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,img,header,footer,nav,main{ margin:0; padding:0; }
ul,ol,li{list-style:none;}
i,em{font-style:normal;}
b,strong{font-weight:100;}
a,u{ text-decoration:none;}
a,img{display:block; border:0;}
h1,h2,h3,h4,h5,h6{ font-weight:100; font-size:14px;}
input,button{outline: none;}
a {border: none;-webkit-tap-highlight-color: rgba(0,0,0,0);-webkit-tap-highlight-color: transparent;outline: none;}
@media screen and (max-width:320px ) {html{font-size: 12px;}}
@media screen and (min-width:321px) and (max-width:375px ) {html{font-size: 14px;}}
@media screen and (min-width:376px ) {html{font-size: 16px;}} 

#app{
    height: 100%;
    width: 100%;
    position: fixed;
    overflow: auto;
}
</style>
