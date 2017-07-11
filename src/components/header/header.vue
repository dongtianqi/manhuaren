<template>
	<div class="header">
		<div class="topBar">
		<img class="left" src="./img/search_logo.png"/>
		<img src="./img/main_logo.png"/>
		<img class="menu-logo right" src="./img/menu_logo.png" @click="showLeft"/>			
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		showLeft(){
		this.$emit('showLeft','true');
		}
	},
}
</script>

<style scoped lang="scss">
.menu-logo {
	    height: 16px;
    position: relative;
    top: 2px;
}
img{
	height: 19px;
}
.topBar {
    height: 45px;
    padding: 13px;
    font-size: 0;
    background-color: #fff36b;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
}
	
</style>
