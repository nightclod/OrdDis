<template>
    <div class="body">
        <div class="search">
            <form>
                <input type="text" name="search_top" autocomplete="off" placeholder="搜索" />
                <button class="btn_search"><i class="iconfont icon-sousuo"></i></button>
            </form>
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
        	<ul class="rec_cont">
        		<li>
        			<div class="img"><img src="http://img.juimg.com/tuku/yulantu/130121/240385-1301210P05616.jpg" alt="" /></div>
        			<div class="content">
        				<div class="name">风味牛肉</div>
        				<div class="grade">
        					<div class="stars">
        						<i class="iconfont icon-xing_f"></i> 
        						<i class="iconfont icon-xing_f"></i> 
        						<i class="iconfont icon-xing_l"></i> 
        						<i class="iconfont icon-xing_l"></i> 
        						<i class="iconfont icon-xing_l"></i> 
        					</div>
        					<div class="money">人均 ￥ 50</div>
        				</div>
        				<div class="site">济南历下区</div>
        			</div>
        		</li>
                <li>
        			<div class="img"><img src="http://58pic.ooopic.com/58pic/19/21/03/5684e1c5077fd.jpg!/format/webp" alt="" /></div>
        			<div class="content">
        				<div class="name">乐乐蛋糕店</div>
        				<div class="grade">
        					<div class="stars">
        						<i class="iconfont icon-xing_f"></i> 
        						<i class="iconfont icon-xing_f"></i> 
        						<i class="iconfont icon-xing_f"></i> 
        						<i class="iconfont icon-xing_f"></i> 
        						<i class="iconfont icon-xing_l"></i> 
        					</div>
        					<div class="money">人均 ￥ 40</div>
        				</div>
        				<div class="site">北京市大栅栏</div>
        			</div>
        		</li>
                <li>
        			<div class="img"><img src="http://www.fancai.com//Uploads/MeiShi/2017-08-16/59939b3328d9e.jpg" alt="" /></div>
        			<div class="content">
        				<div class="name">美好一天早餐店</div>
        				<div class="grade">
        					<div class="stars">
        						<i class="iconfont icon-xing_f"></i> 
        						<i class="iconfont icon-xing_f"></i> 
        						<i class="iconfont icon-xing_f"></i> 
        						<i class="iconfont icon-xing_l"></i> 
        						<i class="iconfont icon-xing_l"></i> 
        					</div>
        					<div class="money">人均 ￥ 20</div>
        				</div>
        				<div class="site">北京市王府井大街</div>
        			</div>
        		</li>
                
        	</ul>
        </div>
        <div>
        </div>
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
    .body{
        padding-bottom:3.4rem; 
        .search{
            height: 3rem;
            width: 100%;
            text-align: center;
            transition:.2s;
            overflow: hidden;
            form{
                height: 2rem;
                position: relative;
                left: 15%;
                padding-top: .6rem;
                input{
                    font-family: 'Raleway', Arial, sans-serif;
                    border: none;
                    height: 2rem;
                    width: 65%;
                    line-height: 2rem;
                    font-size:1rem;
                    color: #333;
                    background: #eee ;
                    display: block;
                    float: left;
                    padding: 0;
                    padding-left: 1rem;
                }
                .btn_search{
                   
                    border: none;
                    background:#fff;
                    display: block;
                    float: left;
                    padding: 0 .5rem;
                    height: 2rem;
                    i{
                        font-size: 1.6rem;
                        color: #2196f3;
                    }
                }
            }
        }
        .menu{
        	background: #fff;
            height: 5.33rem;
            overflow: hidden;
            ul{
                overflow: auto;
                white-space:nowrap;
                li{
                    width: 4rem;
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
        .recommend{
        	background: #fff;
        	.rec_tit{
        		height: 2.5rem;
        		text-align: center;
        		color: #aaa;
                line-height: 2rem;
        	}
        	.rec_cont{
                flex: 1;
                padding-bottom: 2.3rem;
                li{
                   margin-bottom: 1rem;
                   overflow: hidden;
                   border-bottom: solid 1px #eee;
                   padding: 0 0.8rem 0.8rem 0.8rem;
                   .img{
                       float: left;
                       width: 5.1rem;
                       img{
                           width: 5rem;
                           height: 5rem;
                       }
                   }
                   .content{
                       float: left;
                       padding: 0 0.8rem;
                       .name{
                           font-size: 1.4rem;
                           font-family: '楷体';
                           height: 1.8rem;
                           line-height: 1.8rem;
                           color: #333;
                       }
                       .grade{
                           height: 1.4rem;
                           line-height: 1.4rem;
                           .stars{
                               float: left;
                               letter-spacing: -0.2rem;
                               color: #ff9800;
                               font-size: 1.2rem !important ;
                               height: 1.2rem;
                               line-height: 1.4rem;
                           }
                           .money{
                               height: 1.4rem;
                               line-height: 1.6rem;
                               float: left;
                               color: #aaa;
                               font-size: 0.8rem;
                               margin-left: 1.5rem;
                           }
                       }
                       .site{
                           line-height: 1.8rem;
                           color: #888;
                       }
                   } 
                }
        	}
        }
    }
</style>
