<template>
	<view class="index">
		<view class="classification-conatiner">
			<view class="classification-bar" @click="classificationBarClick('beer')">
				<view class="classification-image">
					<image src="../../static/icons/beer.png"></image>
				</view>
				<view class="classification-name">酒水</view>
			</view>
			<view class="classification-bar" @click="classificationBarClick('hotpot')">
				<view class="classification-image">
					<image src="../../static/icons/hotpot.png"></image>
				</view>
				<view class="classification-name">火锅</view>
			</view>
			<view class="classification-bar" @click="classificationBarClick('snacks')">
				<view class="classification-image">
					<image src="../../static/icons/snacks.png"></image>
				</view>
				<view class="classification-name">小食</view>
			</view>
			<view class="classification-bar" @click="classificationBarClick('more')">
				<view class="classification-image">
					<image src="../../static/icons/more.png"></image>
				</view>
				<view class="classification-name">更多</view>
			</view>
		</view>

		<view class="show-card-container">
			<uni-swiper-dot :dots-styles="dotStyles" :info="info" :current="current" field="content" :mode="mode">
				<swiper interval="3000" :autoplay="true" class="swiper-box" @change="change" :current="current">
					<swiper-item v-for="(item ,index) in info" :key="index">
						<view class="swiper-item">
							<image :src="item.content"></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>

		<view class="card-swiper-title">店长推荐</view>
		<view class="card-swiper">
			<ShopCard :price="24" :title="'超级好吃的鸡翅'" />
			<ShopCard :price="24" :title="'超级好吃的鸡翅'" />
			<ShopCard :price="24" :title="'超级好吃的鸡翅'" />
			<ShopCard :price="24" :title="'超级好吃的鸡翅'" />
			<ShopCard :price="24" :title="'超级好吃的鸡翅'" />
			<ShopCard :price="24" :title="'超级好吃的鸡翅'" />
		</view>
	</view>
</template>

<script setup>
	import ShopCard from './modules/shopCard.vue'
	import {
		ref,
		onMounted
	} from 'vue'
	import {
		switchTab
	} from '../../utiils/uni.js'


	const title = ref("Index")

	const info = ref([{
		content: '../../static/images/shutiao.jpg'
	}, {
		content: '../../static/images/jichi.jpg'
	}, {
		content: '../../static/images/huasheng.jpg'
	}])

	const current = ref(0)
	const mode = ref('default')
	let swiperDotIndex = ref(0)
	const dotStyles = ref({
		backgroundColor: 'rgba(0, 0, 0, .3)',
		border: '1px rgba(0, 0, 0, .3) solid',
		color: '#fff',
		selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
		selectedBorder: '1px rgba(0, 0, 0, .9) solid'
	})
	const change = (e) => {
		current.value = e.detail.current
	}

	// 点击最上面的分类跳转
	const classificationBarClick = (category) => {
		// console.log(category);
		uni.setStorageSync('category',category)
		switchTab('/pages/cart/cart')
	}
</script>

<style lang="less">
	.index {
		background-color: #f3f4f5;
		// height: 100vh;

		.classification-conatiner {
			border-radius: 20rpx;
			overflow: hidden;
			// border: 1rpx solid black;
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 100%;
			height: 200rpx;
			background-color: #fff;

			.classification-bar {
				display: flex;
				flex-direction: column;

				align-items: center;
				width: 90rpx;

				.classification-image {

					width: 77rpx;

					width: 77rpx;

					image {
						width: 77rpx;
						height: 77rpx;
					}
				}

				.classification-name {
					font-size: 25rpx;
					text-align: center;
					// font-weight: bold;
				}
			}
		}

		.show-card-container {
			width: 700rpx;
			height: 700rpx;
			margin: 40rpx auto 0 auto;

			// margin-top: 40rpx;
			.swiper-box {
				width: 700rpx;
				height: 700rpx;

				.swiper-item {
					width: 700rpx;
					height: 700rpx;

					image {
						width: 700rpx;
						height: 700rpx;
					}
				}
			}
		}

		.card-swiper-title {
			margin: 20rpx 25rpx 25rpx 25rpx;
			font-weight: bold;
			margin-left: 35rpx;
			width: fit-content;
			// background-color: #fff;
			// width: 150rpx;

			border-bottom: 5rpx solid #1D6D41;
		}

		.card-swiper {
			padding: 0 25rpx 25rpx 25rpx;
			display: flex;
			flex-wrap: wrap;
			align-items: flex-start;
			justify-content: space-between;
		}
	}
</style>