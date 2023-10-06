<template>
	<view class="detail-item">
		<!-- {{props.detailObj}} -->
		<view class="detail-image-container">
			<image :src="props.detailObj.source"></image>
		</view>
		<view class="detail-info-container">
			<view class="title">
				{{ props.detailObj.title }}
			</view>
			<view class="price">
				<view class="price-text">￥{{ props.detailObj.price }}</view>
				<StepControl style="margin-top: 45rpx;"></StepControl>
			</view>
		</view>
	</view>
</template>

<script setup>
import StepControl from "../../../components/stepControl.vue";
import {
	onMounted, ref
} from "vue";
const props = defineProps({
	detailObj: Object
})

const vModelValue = ref(0)
onMounted(() => {

})
</script>

<style lang="less">
.detail-item {
	
	padding: 0 20rpx;
	width: 90%;
	margin: 10rpx auto 0 auto;
	height: 220rpx;
	// border: 1px solid black;
	display: flex;
	align-items: center;
	// justify-content: space-around;

	.detail-image-container {
	
		border-radius: 10rpx;
		width: 200rpx;
		height: 200rpx;
		overflow: hidden;

		// border: 1px solid black;
		image {
			width: 200rpx;
			height: 200rpx;
		}
	}

	.detail-info-container {
		margin-left: 20rpx;
		height: 150rpx;
		width: 50%;

		.title {
			// font-weight: bold;
			font-size: 28rpx;
		}

		.price {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 30rpx;

			// width: 220rpx;
			.price-text {
				margin-top: 50rpx;
				color: orange;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
	}
}
</style>