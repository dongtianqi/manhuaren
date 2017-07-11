<template>
	<div class="hua">
		<div class="chapters" id="chapterList_1" style="display: block;">
			<ul class="am-avg-sm-4 am-thumbnails list hide">
				<li v-for="">
					<div class="d-nowrap"> 31 </div>
				</li>
				
			</ul>
			<p class="more">
				<a class="mm">查看更多</a> <span class="date">更新曝:2017-07-07</span> </p>
		</div>
		<v-recommend></v-recommend>
	</div>
</template>

<script>
	import recommend from '../details/recommend'
export default {
data(){
    return {}
 },   
  	computed: {
//	   	top(){
//	   		return this.$store.state.getTopData.top;
//	   		    console.log("计算函数调用")
//	   	}
},
	methods: {
	},
components: {
    'v-recommend':recommend
}
}
</script>

<style scoped="scoped">
	.chapterList .chapters {
    padding-bottom: 10px;
}
.chapterList .list.hide {
    max-height: 215px;
    overflow: hidden;
}
.chapterList .list {
    padding: 10px;
}
.am-thumbnails {
    margin-left: -.5rem;
    margin-right: -.5rem;
}
.chapterList .list li {
	text-align: center;
	padding: 5px;
    height: 30px;
    line-height: 30px;
}
.chapterList .d-nowrap {
	display: block;
	border-radius: 3px;
		font-size: 13px;
		    color: #444;
    border: 1px solid #eee;
}
.chapterList .more {
    color: #999;
    text-align: center;
    font-size: 13px;
    padding: 0;
    padding-top: 10px;
}
.chapterList .more {
    position: relative;
    margin: 0;
    height: 40px;
}
.am-avg-sm-4>li {
    width: 25%;
    display: block;
    height: auto;
    float: left;
}
.chapterList .more {
    color: #999;
    text-align: center;
    font-size: 13px;
    padding: 0;
    padding-top: 10px;
}
.chapterList .more a {
    color: #767676;
    border: 1px solid #E0E0E0;
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: inline-block;
    border-radius: 15px;
    width: 90px;
}
ul{
	width: 100%;
}
</style>