<template>
	<div class="rankList">
		<div class="titleBar">
			<span class="top d-fl">TOP10</span>
		</div>
		<ul class="list">
				<li class="d-item" v-for="item in top" @click="showDetails(item)"> 
					<img class="cover" src="http://mhfm6.tel.cdndm5.com/1/432/20160628091105_320x246_159.png">
					<img class="topLogo" src="http://js16.tel.cdndm.com/v201707041718/manhuaren/images/mobile/top_logo_1.png"> 
						<span class="topNum">{{item.num}}</span>
					<div class="info d-item-content">
						<p class="title d-nowrap">{{item.name}}</p>
						<p class="subtitle d-nowrap">{{item.content}}</p>
						<p class="bottom"> <span class="d-nowrap">{{item.progress}}</span> </p>
						<span class="score">{{item.score}}</span> </div>
				</li>
		</ul>

	</div>
</template>

<script>
		export default {
	props: { 
    top:{
    	type:Array
    }
  },
  	methods: {
showDetails(e){
	this.$router.push({ path:'details', query: { part:e }});
}
	},
	computed: {
		  
 }
};
</script>

<style lang="scss" scoped="scoped">
	.rankList {
    margin-bottom: 10px;
    background-color: #fff;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
	.titleBar{
	height:40px;
		.top{
		    color: #fff;
    background-color: #fe8ba8;
    border-right: 1px solid #ff5883;
    border-bottom: 1px solid #ff5883;
    border-bottom-right-radius: 5px;
    padding: 2px 5px;
	}
}
}
	.rankList .list li {
		  display: -webkit-box;
    padding: 5px 10px;
    border-bottom: 1px solid #ccc;
    position: relative;
}
.rankList .list li .cover {
    width: 100px;
    height: 77px;
}
.rankList .list li .topLogo {
    position: absolute;
    top: 5px;
    left: 10px;
    width: 20px;
}
.rankList .list li .topNum {
    position: absolute;
    top: 5px;
    left: 10px;
    width: 20px;
    color: #fff;
    font-size: 11px;
    text-align: center;
    line-height: 15px;
    }
    .rankList .list li .info .subtitle {
    font-size: 13px;
    color: #767676;
    margin-top: 3px;
    padding-right: 40px;
}
.d-nowrap {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
}
.rankList .list li .info {
-webkit-box-flex: 1;
    padding-left: 10px;
    position: relative;
    height: 77px;
}
.rankList .list li .info .title {
    font-size: 15px;
    color: #444;
}
.rankList .list li .info .bottom {
    color: #fe8ba8;
    font-size: 13px;
    margin-top: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: absolute;
    left: 10px;
    bottom: 0;
    width: 100%;
    padding-right: 10px;
}
.rankList .list li .info .score {
    background-color: #ffbecf;
    color: #fff;
    padding: 2px 6px;
    font-size: 11px;
    border-radius: 15px;
    position: absolute;
    right: 0;
    top: 27px;
}
img {
    box-sizing: border-box;
    vertical-align: middle;
}
p{
	line-height: 1.6;
}
</style>