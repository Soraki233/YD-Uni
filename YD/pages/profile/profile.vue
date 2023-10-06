<template>
	<view class="profile">
		<view class="userinfo-container">
			<view class="avatar">
				<image class="avatar-image" src="../../static//images/avatar.jpg" />

			</view>
			<view class="info-swiper">
				<view class="user-name">云端小郭</view>
				<view class="store-name">翰林华府店</view>
			</view>
		</view>
		<view class="options-container">
			<view class="options-group">
				<view class="option">
					<image class="option-icon" src="../../static/icons/order-completed.png"></image>已完成
					<image class="enter-icon" src="../../static/icons/enter.png"></image>
				</view>
				<view class="option">
					<image class="option-icon" src="../../static/icons/order-unpaid.png"></image>未付款
					<image class="enter-icon" src="../../static/icons/enter.png"></image>
				</view>
				<view class="option">
					<image class="option-icon" src="../../static/icons/order-cancel.png"></image>已取消
					<image class="enter-icon" src="../../static/icons/enter.png"></image>
				</view>
			</view>

			<view class="options-group" style="margin-top: 20rpx;">
				<view class="option">
					<image class="option-icon" src="../../static/icons/reback.png"></image>意见反馈
					<image class="enter-icon" src="../../static/icons/enter.png"></image>
				</view>
				<view class="option">
					<image class="option-icon" src="../../static/icons/setting.png"></image>设置
					<image class="enter-icon" src="../../static/icons/enter.png"></image>
				</view>
			</view>
		</view>
		<view class="version-info">Test Version 0.0.1 ©云端精酿</view>
	</view>
	<!-- <Tabbar></Tabbar> -->
</template>

<script setup>
// import Tabbar from '@/components/tabbar.vue'
</script>

<style lang="less">
.profile {
	background-color: #F8F8F8;
	height: 100vh;

	.userinfo-container {
		// width: 200rpx;
		background-color: #1D6D41;
		height: 400rpx;
		border-radius: 0 0 30% 30%;
		position: relative;
		display: flex;
		padding-top: 80rpx;
		// align-items: center;
		padding-left: 50rpx;

		.avatar {
			border: 4rpx solid #FFFFFF;
			width: 180rpx;
			height: 180rpx;
			border-radius: 50%;
			overflow: hidden;
			background-color: #fff;

			.avatar-image {
				width: 180rpx;
				height: 180rpx;
			}
		}

		.info-swiper {
			margin-left: 30rpx;
			height: 180rpx;

			.user-name {
				color: #fff;
				font-weight: bold;
				font-size: 36rpx;
				height: 100rpx;
				line-height: 100rpx;
			}

			.store-name {
				font-weight: 600;
				font-size: 26rpx;
				background-color: orange;
				padding: 0 15rpx;
				height: 50rpx;
				line-height: 50rpx;
				border-radius: 20rpx;
				color: #fff;
			}
		}
	}

	.options-container {
		z-index: 100;
		// padding-left: 70rpx;
		background-color: #fff;
		margin-top: -100rpx;
		// height: 200rpx;
		border-radius: 60rpx;
		overflow: hidden;

		.options-group {
			background-color: #fff;
			border-radius: 60rpx;

			.option {
				padding-left: 70rpx;
				background-color: #fff;
				position: relative;
				font-weight: normal;
				color: #272C2F;
				font-size: 30rpx;
				display: flex;
				align-items: center;
				height: 100rpx;
				line-height: 100rpx;

				.option-icon {
					padding-right: 25rpx;
					width: 40rpx;
					height: 40rpx;
				}
				.enter-icon {
					position: absolute;
					right: 30rpx;
					width: 35rpx;
					height: 35rpx;
				}
			}
		}
	}
	.version-info {
		position: absolute;
		bottom: 15rpx;
		left: 50%;
		transform: translateX(-50%);
		color: #999999;
		font-size: 18rpx;
	}
}
</style>
