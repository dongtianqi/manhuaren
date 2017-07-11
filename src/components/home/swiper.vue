<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
		</div>
		<div class="swiper-pagination swiper-pagination-white"></div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'
	import banner1 from './img/banner1.jpg'
	import banner2 from './img/banner2.jpg'
	import banner3 from './img/banner3.jpg'
	import banner4 from './img/banner4.jpg'
	
	//图片地址 写在模板不出错，是因为你已经有模板的图片解析器了，在JS中需要import
	export default {
		data() {
			return {
				'listImg': [{
						'url': banner1
					},
					{
						'url': banner2
					},
					{
						'url': banner3
					},
					{
						'url': banner4
					}
				]
			}
		},
		//props: ['listImg'],
		mounted() {
			//console.log('mounted', this)
			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				loop: true,
				speed: 600,
				autoplay: 3000,
				onTouchEnd: function() {
					swiper.startAutoplay()
				}
			});
		}
	}
</script>

<style lang="less">
	.swiper-container {
box-shadow: 0 0 2px rgba(0,0,0,.15);
		width: 100%;
		height: 10rem;
		.swiper-wrapper {
			width: 100%;
			height: 100%;
		}
		.swiper-slide {
			background-position: center;
			background-size: cover;
			width: 100%;
			height: 100%;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.swiper-pagination-bullet {
			width: 0.833rem;
			height: 0.833rem;
			display: inline-block;
			background: #7c5e53;
		}
	}
</style>