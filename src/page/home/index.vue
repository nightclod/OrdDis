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
        <div class="recommend">
        	<div class="rec_tit">
        		—— · &nbsp; 推荐商家 &nbsp; · ——
        	</div>
        	<ul class="rec_cont">
        		<li>
        			<div class="img"><img src="http://www.fancai.com//Uploads/MeiShi/2017-08-16/59939b3328d9e.jpg" alt="" /></div>
        			<div class="content">
        				<div class="name">美好一天早餐店</div>
        				<div class="grade">
        					<div class="stars">
        						<i class="iconfont icon-xing_f"></i> 
        						<i class="iconfont icon-xing_f"></i> 
        						<i class="iconfont icon-xing_l"></i> 
        						<i class="iconfont icon-xing_l"></i> 
        						<i class="iconfont icon-xing_l"></i> 
        					</div>
        					<div class="money">人均 ￥ 20</div>
        				</div>
        				<div class="site">北京市</div>
        			</div>
        		</li>
        	</ul>
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
        background: #ccc;
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
            top: 4rem;
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
        	background: #fff;
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
        .recommend{
        	background: #fff;
        	.rec_tit{
        		height: 2rem;
        		text-align: center;
        		color: #aaa;
        		line-height: 2rem;
        	}
        	.rec_cont{
        		height: 30rem;
                li{
                   margin-bottom: 0.2rem;
                   overflow: hidden;
                   border-bottom: solid 1px #eee;
                   padding: 0 0.8rem 0.8rem 0.8rem;
                   .img{
                       float: left;
                       width: 20%;
                       img{
                           width: 5rem;
                           height: 5rem;
                       }
                   }
                   .content{
                       float: left;
                       width: 79%;
                       padding: 0 0.8rem;
                       .name{
                           font-size: 1.5rem;
                           font-family: '楷体';
                           height: 1.8rem;
                           line-height: 1.8rem;
                       }
                    //    .grade{
                    //        overflow: hidden;
                    //        .stars{
                    //            float: left;
                    //            letter-spacing: -0.1rem;
                    //        }
                    //        .money{
                    //            float: left;
                    //        }
                    //    }
                       
                   } 
                }
        	}
        }
    }
</style>
