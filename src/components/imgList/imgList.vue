<template>
		<div class="imgList">
		<div class="titleBar">
			<div class="icon left" v-bind:class="dataI.icon"></div>
			<span class="title">{{dataI.title}}</span>
			<div class="more-wapper right" @click="toOriginal(index)">
				<span class="more">更多</span><div class="icon-arrow_right icon">
					
				</div>
			</div>
		</div>
		<ul>
			<li class="am-thumbnail" v-for="item in dataI.imgList" >
			<img :src="item.img" alt="" class="originalImg"/>
				<p class="d-nowrap">{{item.name}}</p>
			</li>
		</ul>
	</div>
	


</template>
<script>
	export default {
	props: { 
    dataI:{
    	type:String
    }
  },
  	methods: {
		toOriginal(e) { 
			console.log(e)
			this.$router.push(e);
		}
	},
	computed: {
		  
 }
};
</script>
<style lang="scss" scoped="scoped">
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
    li{
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


</style>