<template>
    <div class="subject">
        <div class="banner">
            <img src="../../assets/img/meishi1.jpg">
            <div class="search_outer">
                <input type="text" name="search" class="search" autocomplete="off" placeholder="搜索"/>
                <span class="but"></span>
                <button class="btn_search"><i class="iconfont icon-sousuo"></i></button>
            </div>
        </div>
        
        <div class="menu">
            <ul>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-mifan"></use>
                    </svg>
                    <div class="menu_li">美食</div>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-wucan"></use>
                    </svg>
                    <div class="menu_li">午餐</div>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dinner"></use>
                    </svg>
                    <div class="menu_li">晚餐</div>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-meishijiayin"></use>
                    </svg>
                    <div class="menu_li">饮品</div>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-meishi"></use>
                    </svg>
                    <div class="menu_li">汉堡</div>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-miantiao"></use>
                    </svg>
                    <div class="menu_li">超值</div>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-kaochuan"></use>
                    </svg>
                    <div class="menu_li">小吃</div>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-_waimai"></use>
                    </svg>
                    <div class="menu_li">速达</div>
                </li>
            </ul>
        </div>
        <div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
        
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .subject{
        overflow: auto;
        .banner{
            position: relative;
            height: 10rem;
            width: 100%;
            background: #f2f0ec;
            overflow: hidden;
            img{
                position: absolute;
                max-height: 100%;
                left:-3.8rem;
            }
        }
        .search_outer{
            top: 3.5rem;
            right: 11%;
            position: absolute;
            height: 2.1rem;
            width: 17rem;
            .search{
                font-family: 'Raleway', Arial, sans-serif;
                border: none;
                border-bottom: solid 1px #fed508;
                height: 2rem;
                width: 17rem;
                line-height: 2rem;
                font-size:1rem;
                color: #466674;
                background: rgba(0, 0, 0, 0) ;
                font-weight: 700;
            }
            .but{
                position: absolute;
                bottom: 0;
                height: 2px;
                display: block;
                width: 0;
                background: #4CAF50;
                transition:.3s;
            }
            .search:focus + .but{
                width: 100%;
            }
            .btn_search{
                display: block;
                position: absolute;
                border: none;
                background: rgba(0, 0, 0, 0) ;
                bottom: 0.2rem;
                right: 0;
                font-size: 1rem;
                i{
                    font-size: 1.6rem;
                    color: #08670c;
                }
            }
        } 
        .menu{
            li{
                width: 24%;
                height: 5rem;
                text-align: center;
                display: inline-block;
                .icon {
                    margin-top: .4rem;
                    width: 2rem; 
                    height: 2rem;
                }
                .menu_li{
                    font-size: 1rem;
                }
            }
        }
    }
</style>
