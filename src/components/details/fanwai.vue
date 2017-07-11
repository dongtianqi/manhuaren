<template>
	<div class="fanwai">
		<ul class="am-avg-sm-4 am-thumbnails list hide">
			<li v-for="">
				<div class="d-nowrap"> 福龙周记19 </div>
			</li>
			
		</ul>
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

<style scoped="scoped" lang="scss">
.chapterList .list.hide {
    max-height: 215px;
    overflow: hidden;
}
.chapterList .list {
    padding: 10px;
    padding-bottom: 0;
}
.am-thumbnails {
    margin-left: -.5rem;
    margin-right: -.5rem;
}
.chapterList .list.hide {
    max-height: 215px;
    overflow: hidden;
}
.chapterList .list {
    padding: 10px;
    padding-bottom: 0;
}
.am-thumbnails {
    margin-left: -.5rem;
    margin-right: -.5rem;
}
.chapterList .list li {
    text-align: center;
    font-size: 13px;
    padding: 5px;
    width: 25%;
}
.chapterList .list li .d-nowrap {
    color: #444;
    border: 1px solid #eee;
    display: block;
    height: 30px;
    line-height: 30px;
    padding: 0 5px;
    border-radius: 3px;
}
ul{
	width: 100%;
}
</style>