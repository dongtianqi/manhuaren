<template>
<div class="details">
	<v-partHeader :name="name"></v-partHeader>
	<!--封面图片-->
	<div class="coverForm" style="overflow: hidden; height: 245.76px;"> 
		<img :src="book.imgBig" alt="山海逆战" title="山海逆战"> 
	</div>
	<!--漫画详情-->
<div class="detailForm d-border"> 
	<div class="main d-item"> 
		<div class="info d-item-content"> 
			<p class="title d-nowrap">{{book.name}}</p> 
			<p class="subtitle d-nowrap">类型：{{book.type}}</p>
			<p class="subtitle d-nowrap"> 作者：{{book.author}}  </p> 
			<p class="bottom d-nowrap">更新至{{book.progress}}</p> 
		</div>            
		<div class="sorce">                
			<div class="block">                   
				<div class="top">{{book.score}}<span></span></div> 
			</div>                
			<img src="http://js16.tel.cdndm.com/v201707041718/manhuaren/images/mobile/detail_flower_1.png">
		</div>        
	</div>        
		<ul class="am-avg-sm-2 am-thumbnails toolBar">  
			<li class="am-thumbnail" id="shownextchapter">                   
					<span id="readInfo" style="line-height: 37px;"></span>   
					<img id="readBtnImg" src="http://js16.tel.cdndm.com/v201707041718/manhuaren/images/mobile/detail_btn_1_n.png" alt="阅读">   
           
			</li>           
			<li class="am-thumbnail"> 
					<img src="http://js16.tel.cdndm.com/v201707041718/manhuaren/images/mobile/detail_btn_2_a.png" alt="收藏" id="collect_icon">
			</li>        
		</ul>        
		<div class="detailContent"> 
			<p align="left" class="d-nowrap-clamp d-nowrap-clamp-2">山海之间无奇不有，更有各种珍奇异兽存活其间。智者伯益发现食用异兽之肉，饮其鲜血，便能获得异兽之力。而这些身负奇能者，被称为异士！伯益走遍天下，笔录所见的异兽，并写成《山海...           
			</p>            
			<a href="javascript:showContent();" class="more">
				<img src="http://js16.tel.cdndm.com/v201707041718/manhuaren/images/mobile/arrow_down.png"></a>  
		</div>    
</div>
	<!--章节详情-->
<div class="chapterList">
	<ul class="am-avg-sm-3 am-thumbnails selecter">
		<li><router-link to="/hua">话（{{ }}）</router-link></li>
		<li><router-link to="/fanwai">番外（{{ }}）</router-link></li>
		<li><router-link to="/pinglun">评论（{{ }}）</router-link></li>
	</ul>
	<router-view></router-view>
	
	</div>
</div>
</template>

<script>
	import partHeader from '../header/partHeader'
export default {
data(){
    return {}
 },   
  	computed: {
  		name(){
	   		//获取路由传参
	   		return this.$route.query.part.name;
	   },
	    book(){
	   		//获取路由传参
	   		return this.$route.query.part;
	   	}
},
	methods: {
	},
components: {
    'v-partHeader':partHeader
}
}
</script>

<style>
	.coverForm img {
    width: 100%;
}
	.router-link-active{
	border-bottom: 2px solid #363636;
    color: #212121;
	}
	.selecter {
    text-align: center;
    color: #444;
    background-color: #fff;
}
.selecter li {
    font-size: 15px;
    padding-bottom: 0;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #dadada;
    color: #767676;
}
.am-thumbnails>li {
    display: block;
    float: left;
}
.am-thumbnails>li a {
	display: block;
width: 100%;
height: 100%;
}
.chapterList  .am-thumbnails li{
	padding:0;
}
.am-avg-sm-3>li {
    width: 33.33333333%;
}
	.details {
		background: #f1f1f1;
		line-height: 1.6;
	}
	.detailForm .main {
    padding: 10px;
    padding-bottom: 0;
}
.detailForm .main .info {
    padding-right: 10px;
}
.d-item-content {
    -webkit-box-flex: 1;
}
.detailForm .main .info .title {
    color: #444;
    font-size: 15px;
    padding-bottom: 5px;
}
.detailForm .main .info p {
    margin: 0px;
}
.d-nowrap {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.detailForm .main .info .subtitle {
    color: #767676;
    font-size: 12px;
}
.detailForm .main .info p {
    margin: 0px;
}
.detailForm .main .info .bottom {
    color: #ff7789;
    font-size: 15px;
    padding-top: 3px;
}
.detailForm .main .sorce {
    width: 90px;
    position: relative;
}
.detailForm .main .sorce .block {
    border: 1px solid #2dbcff;
    border-radius: 3px;
    width: 50px;
    text-align: center;
    margin-top: 20px;
}
.detailForm .main .sorce .block .top {
    background-color: #2dbcff;
    color: #fff;
    font-size: 27px;
    height: 40px;
    line-height: 38px;
}
.detailForm .toolBar li {
    border: 0;
    margin-bottom: 0;
    padding-bottom: 0;
    position: relative;
    min-height: 1px;
}
.detailForm .toolBar li span {
    position: absolute;
    top: 0;
    left: 40%;
    color: #fff;
    font-size: 13px;
}
.detailForm .detailContent {
    padding: 0 10px;
}
.detailForm .detailContent p {
    font-size: 13px;
    margin: 0;
}
.d-nowrap-clamp-2 {
    -webkit-line-clamp: 2;
}
.d-nowrap-clamp {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}
.detailForm .detailContent .more {
    text-align: center;
    display: block;
}
.d-item {
    display: -webkit-box;
}
.detailForm .main .sorce img {
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
}

.detailForm .toolBar li {
    border: 0;
    margin-bottom: 0;
    padding-bottom: 0;
    position: relative;
    min-height: 1px;
}
img {
    box-sizing: border-box;
    vertical-align: middle;
}
.am-thumbnails>li {
    padding: 0 .5rem 1rem;
}
.am-avg-sm-2>li {
	    display: block;
    height: auto;
    float: left;
    width: 50%;
}
.am-thumbnail a>img, .am-thumbnail>img, img.am-thumbnail {
    max-width: 100%;
    height: auto;
}
.am-thumbnail a>img, .am-thumbnail>img {
    margin-left: auto;
    margin-right: auto;
    display: block;
}
.chapterList {
    overflow: hidden;
    background-color: #fff;
}
.d-border {
    border-top: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
}
.detailForm {
background: white;
    overflow: hidden;
    margin-bottom: 10px;
}
.d-nowrap-clamp-2 {
    -webkit-line-clamp: 2;
}

.d-nowrap-clamp {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}
.am-container:after, .am-g:after, [class*=am-avg-]:after {
    clear: both;
}
.am-container:after, .am-container:before, .am-g:after, .am-g:before, [class*=am-avg-]:after, [class*=am-avg-]:before {
    display: table;
    content: " ";
}
.toolBar{
	padding:10px;
}
.detailForm .detailContent .more img {
    width: 12px;
    vertical-align: top;
    position: relative;
    top: 10px;
}
</style>