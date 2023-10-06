<template>
	<view class="tabbar border">
		<view class="tab tab-cart" @click="tabTap(0)">
			<view class="tab-container">
				<view :class="{'icon':true, 'iconfont':true, 'icon-bianlidian':true, 'icon-active':activeTabIndex===0}"
					style="font-size: 40rpx;"></view>
				<view class="text">购物车</view>
			</view>
		</view>
		<view class="tab tab-cart" @click="tabTap(1)">
			<view class="tab-container">
				<view :class="{'icon':true, 'iconfont':true, 'icon-shouye-zhihui':true, 'icon-active':activeTabIndex===1}">
				</view>
				<view class="text">首页</view>
			</view>
		</view>
		<view class="tab tab-cart" @click="tabTap(2)">
			<view class="tab-container">
				<view
					:class="{'icon':true, 'iconfont':true, 'icon-gerenzhongxin-zhihui':true, 'icon-active':activeTabIndex===2}">
				</view>
				<view class="text">我的</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'
	
	onMounted(() => {
		console.log(111);
	})
	const activeTabIndex = ref(1)
	const navArr = ['/pages/cart/cart', '/pages/index/index', '/pages/profile/profile']
	const tabTap = (idx) => {
		activeTabIndex.value = idx
		uni.navigateTo({
			url: navArr[idx],
			fail() {}
		})
	}
</script>

<style lang="less">
	@import url('/styles/main.less');
	@import url('../static/icons/iconfont.css');

	.tabbar {
		// border: 2rpx solid black;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 130rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;

		.tab {
			width: 120rpx;
			height: 120rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;

			.tab-container {
				text-align: center;

				.icon {
					width: 70rpx;
					height: 70rpx;
					font-size: 46rpx;
					text-align: center;
					line-height: 70rpx;
					font-weight: bold;
				}

				.text {
					font-size: 28rpx;
				}

				.icon-active {
					background-color: #1D6D41;
					border-radius: 50%;
				}
			}
		}


	}
</style>