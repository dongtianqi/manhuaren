<template>
	<div class="original">
		<v-partHeader :name="original.title"></v-partHeader>
		<div class="classList">
			
		<ul class="am-avg-sm-3 am-thumbnails list">
			<li class="am-thumbnail" v-for="items in original.imgList" @click="showDetails(items)">
				<div class="container" style="height: 122.36px;">
					<img :src="items.img" alt="" style="height: 122.36px;">
					<span class="tip">{{items.progress}}</span>
				</div>
				<p class="d-nowrap">{{items.name}}</p>
			</li>
		</ul>
		</div>
	</div>
</div>
</template>

<script>
import header from '../header/header'
import partHeader from '../header/partHeader'
export default {
data(){
    return {}
 },   
  	computed: {
	   	original(){
	   		//获取路由传参
	   		let part= this.$route.query.part;
	   		if(part=="original"){
	   			return this.$store.state.getHomeData.home.original;		
	   		}else if(part=="updates"){
	   			return this.$store.state.getHomeData.home.updates;
	   		}else if(part=="girls"){
	   			return this.$store.state.getHomeData.home.girls;
	   		}
	   	},
	   	top(){
	   		return this.$store.state.getTopData.top;
	   		    console.log("计算函数调用")
	   	}
},
	methods: {
		showDetails(e){
			this.$router.push({ path:'details', query: { part:e }});
		}
	},
components: {
    'v-header': header,
    'v-partHeader':partHeader
}
}
</script>

<style lang='scss' scoped="scoped">
.d-nowrap {
	padding-top: 5px;
}
.am-thumbnails {
    margin-left: -.5rem;
    margin-right: -.5rem;
}
.classList{
	padding: 10px;
	margin-top: 45px;
}
li .container {
    position: relative;
}
li .container img {
    border-radius: 3px;
    width: 100%;
}
li {
	display: inline-block;
	    border: 0;
    background-color: transparent;
    margin-bottom: 0;
    padding: 0 .5rem .5rem;
    width: (100%/3);
}
img {
    box-sizing: border-box;
    vertical-align: middle;
}
li .tip {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 25px;
    line-height: 25px;
    background-color: #000;
    opacity: 0.8;
    -moz-opacity: 0.8;
    text-align: center;
    color: #fff;
    width: 100%;
    font-size: 11px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.d-nowrap{
	white-space: nowrap;
	font-size: 15px;
	text-align: center;	
}
.partHeader{
	position: fixed;
	top:0;
	z-index: 20;
	width: 100%;
}

</style>