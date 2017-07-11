<template>
	<div class="partHeader">
		<div class="topBar d-ft">    
			<img src="./img/icon_back.png" class="backlogo" @click="back">     
			<span class="title d-nowrap">{{name}}</span>   
		</div>
	</div>
</template>

<script>
export default {
	props: { 
    name:{
    	type:String
    }
  },
	methods: {
		back(){
			this.$router.go(-1)
		}
	}

}
</script>

<style scoped lang="scss">
.topBar {
    height: 45px;
    padding: 13px;
    font-size: 0;
    background-color: #fff36b;
    width: 100%;
    text-align: center;
    line-height: 17px;
}
.topBar img.backlogo {
    position: absolute;
    left: 15px;
    height: 12px;
    top: 17px;
}
.topBar .title {
    font-size: 17px;
    display: inline-block;
    width: 40%;
    line-height: 20px;
}
.d-nowrap {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
	
</style>
