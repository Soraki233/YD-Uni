<template>
	<view class="shop-card">
		<view class="shop-card-container">
			<view class="card-image">
				<image src="../../../static/images/jichi.jpg"></image>
			</view>
			<view class="card-title">{{props.title||''}}</view>
			<!--  -->
			<view class="price">
				<view class="price-container">
					<text class="price-online">￥{{props.price||''}}</text>
					&nbsp;<text class="price-del">￥18</text>
				</view>
				<view class="add-btn">
					<image src="../../../static/icons/add.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onMounted
	} from "vue";
	const props = defineProps({
		price: Number,
		title: String
	})
	onMounted(() => {
		// console.log('111');
		// console.log(props.price);
	})
</script>

<style lang="less">
	.shop-card {
		border-radius: 20rpx;
		background-color: #fff;
		// border: 1px solid black;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 25rpx;
		width: 335rpx;
		height: 450rpx;

		.shop-card-container {
			
			width: 300rpx;
			// border: solid 1px black;
			height: 416rpx;

			.card-image {
				overflow: hidden;
				border-radius: 10rpx;
				width: 100%;
				height: 300rpx;
				// border: solid 1px black;

				image {
					width: 100%;
					height: 300rpx;
				}
			}

			.card-title {
				margin-top: 12rpx;
				margin-left: 8rpx;
				// font-weight: bold;
				font-size: 28rpx;
			}

			.price {
				margin-top: 20rpx;
				font-weight: bold;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.price-online {
					color: orange;
				}

				.price-del {
					text-decoration: line-through;
					color: #CBCBCB;
					font-size: 24rpx;
				}

				.add-btn {
					background-color:#1D6D41;
					width: 45rpx;
					height: 45rpx;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
					image {
						width: 30rpx;
						height: 30rpx;
						margin: 0 auto;
					}
				}
			}
		}
	}
</style>