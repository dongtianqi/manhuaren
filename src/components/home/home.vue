<template>
	<div class="home">
		<v-header  v-on:showLeft="showLeft"></v-header>
		<v-swiper></v-swiper>
		
		<div class="imgList" v-for="(item,index) in home">
		<div class="titleBar">
			<div class="icon left" v-bind:class="item.icon"></div>
			<span class="title">{{item.title}}</span>
			<div class="more-wapper right" @click="toOriginal(index)">
				<span class="more">更多</span><div class="icon-arrow_right icon">
					
				</div>
			</div>
		</div>
		<ul>
			<li class="am-thumbnail" v-for="items in item.imgList.slice(0, 6)" @click="showDetails(items)">
			<img :src="items.img" alt="" class="originalImg"/>
				<p class="d-nowrap">{{items.name}}</p>
			</li>
		</ul>
	</div>
	<v-top :top="top"></v-top>
			<div class="foot">
			<a>更多排行榜</a>
			<img src="http://js16.tel.cdndm.com/v201707041718/manhuaren/images/mobile/arrow_right.png">
			</div>
				<!--侧边栏-->
			<div v-if="somedata" id="doc-oc-demo1" @click.stop="hide" class="am-offcanvas am-active" style="touch-action: pan-y;user-select: none;-webkit-user-drag: none;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
<!--  .stop让事件停留在元素本身，阻止事件冒泡到父元素而执行父元素的事件-->
				<div @click.stop=""  class="am-offcanvas-bar am-offcanvas-bar-flip am-offcanvas-bar-overlay am-offcanvas-bar-active">
					<div class="am-offcanvas-content">
						<div class="rightMenu">
							<div class="avatarBar">
								<a title="用户登录"> 
									<img src="http://js16.tel.cdndm.com/v201707041718/manhuaren/images/mobile/avatar_img.png"> 
								</a>
							</div>
							<a>
								<div class="loginBtn">登录/注册</div>
							</a>
							<ul class="menuList">
								<li>
									<a class="menu_logo_1"></a>
								</li>
								<!--首页按钮-->
								<li>
									<a class="menu_logo_2"></a>
								</li>
								<!--分类按钮-->
								<li>
									<a class="menu_logo_3"></a>
								</li>
								<!--历史按钮-->
								<li>
									<a class="menu_logo_4"></a>
								</li>
								<!--书架按钮-->
								<li>
									<a class="menu_logo_5"></a>
								</li>
								<!--投稿按钮-->
							</ul>
						</div>
					</div>
				</div>
			</div>
</div>
</template>

<script>
import header from '../header/header'
import swiper from '../home/swiper'
import imgList from '../imgList/imgList'
import top from '../home/top'
 
export default {
data(){
    return {somedata:false}
   },     
created(){
	//组件创建时对store里的action进行分发
	 this.$store.dispatch('getData');
	 console.log("home初始化")
},
  	computed: {
	   	home(){
	   		return this.$store.state.getHomeData.home;
	   		    console.log("计算函数调用")
	   	},
	   		   	top(){
	   		return this.$store.state.getTopData.top;
	   		    console.log("计算函数调用")
	   	}
  	
},
	methods: {
		toOriginal(e) { 
			this.$router.push({ path:'original', query: { part:e }});
		},
		showDetails(e){
			this.$router.push({ path:'details', query: { part:e }});
		},
		showLeft(somedata){
			this.somedata = somedata;
		},
		hide(){
			this.somedata = false;
		}

	},
//	Vue.nextTick(function () {
//vm.$el.textContent === 'new message' // true
//}
components: {
    'v-header': header,
    'v-swiper': swiper,
    'v-imgList':imgList,
    'v-top':top
}
}
</script>

<style lang='scss' scoped="scoped">

.imgList{
	background: white;
	border-bottom: 1px solid #ddd;
	border-top: 1px solid #ddd;
	margin-bottom: 10px;
}
	.titleBar {
	height: 37px;
	line-height: 17px;
	padding: 10px;
	.icon {
		vertical-align: top;
	}
	.title {
		font-size: 15px;
		vertical-align: top;
		font-weight: bold;
	}
	.more-wapper {
		display: inline-block;
	}
	.more {
		vertical-align: top;
		font-size: 11px;
		color: #bbb;
	}
}
ul{
	    padding: 0 10px;
    padding-bottom: 5px;
        margin-left: -.5rem;
    margin-right: -.5rem;
    .am-thumbnail{
    	box-sizing: border-box;
    	width: (100%/3);
    	padding: 0 .5rem .5rem;
    	display: inline-block;
    	.originalImg{
    		width: 100%;
    	}
    	p{
        font-size: 15px;
        color: #444;
        text-align: center;
        margin: 5px;
    	}
    }
    }
    .foot{
 background: white;
    	box-sizing: border-box;
    	    height: 40px;
    	    padding:15px;
    font-size: 0;
    text-align: center;
    img{
    	    height: 10px;
    margin-left: 6px;
    	vertical-align: middle;
    }
    	a{
    		   	vertical-align: middle;
    		    color: #767676;
    font-size: 12px;
    	}
    	}
/*侧边栏*/
.am-offcanvas.am-active {
    display: block;
}
.am-offcanvas {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1090;
    background: rgba(0,0,0,.15);
}
.am-offcanvas.am-active .am-offcanvas-bar.am-offcanvas-bar-active {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
}
.am-offcanvas-bar {
    width: 100px;
}
.am-offcanvas-bar-flip {
    left: auto;
    right: 0;
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
}
.am-offcanvas-bar {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 1091;
    max-width: 100%;
    background: #333;
    overflow-y: auto;
    }
    .am-offcanvas-content {
    padding: 15px;
    color: #999;
}
.rightMenu .avatarBar {
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #fff;
    height: 66px;
    width: 66px;
    margin: 0 auto;
    margin-top: 20px;
}
.rightMenu .avatarBar img {
    width: 60px;
}
.rightMenu .loginBtn {
    font-size: 13px;
    text-align: center;
    color: #fff;
    margin-top: 10px;
}
.rightMenu .menuList {
    padding: 0;
    margin-top: 30px;
}
.rightMenu .menuList li {
    border-top: 1px dashed #595959;
    padding: 20px 0;
    text-align: center;
}
.rightMenu .menuList li a.menu_logo_1 {
    background: url("http://js16.tel.cdndm.com/v201707041718/manhuaren/images/mobile/new_l_1.png") no-repeat;
    background-size: contain;
}
.rightMenu .menuList li a.menu_logo_2 {
    background: url("http://js16.tel.cdndm.com/v201707041718/manhuaren/images/mobile/new_l_2.png") no-repeat;
    background-size: contain;
}
.rightMenu .menuList li a {
    display: inline-block;
    width: 30px;
    height: 56px;
}
.am-offcanvas-content a {
    color: #ccc;
}
.rightMenu .menuList li a.menu_logo_3 {
    background: url("http://js16.tel.cdndm.com/v201707041718/manhuaren/images/mobile/new_l_3.png") no-repeat;
    background-size: contain;
}
.rightMenu .menuList li a.menu_logo_4 {
    background: url("http://js16.tel.cdndm.com/v201707041718/manhuaren/images/mobile/new_l_4.png") no-repeat;
    background-size: contain;
}
</style>