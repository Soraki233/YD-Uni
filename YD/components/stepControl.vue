<template>
  <view class="step-control">

    <view class="step-control-container" v-if="stepNum > 0">
      <view class="step-btn" @click="sub()">
        <image src="../static/icons/subtract.png"></image>
      </view>
      <view class="number">{{ stepNum }}</view>
      <view class="step-btn" @click="add()">
        <image src="../static/icons/add.png"></image>
      </view>
    </view>
    <view class="step-control-container" v-if="stepNum <= 0">
      <view class="step-btn" @click="add()">
        <image src="../static/icons/add.png"></image>
      </view>
    </view>
  </view>
  <!--  -->
</template>

<script setup>
import { ref, watch } from 'vue'
const emit = defineEmits('sub', 'add')
const stepNum = ref(0)

const sub = () => {

  stepNum.value--
  console.log(stepNum.value);
  emit('sub')
}

const add = () => {
  stepNum.value++
  console.log(stepNum.value);
  emit('add')
}

// watch()
</script>

<style lang="less" scoped>
.step-control {
  .step-control-container {
    // width: 100rpx;
    display: flex;
    height: 40rpx;
    justify-content: space-between;
    // border: 1rpx solid black;

    .step-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40rpx;
      height: 40rpx;
      border-radius: 50%;
      overflow: hidden;
      background-color: #1D6D41;

      image {
        width: 30rpx;
        height: 30rpx;
      }
    }

    .number {
      width: 60rpx;
      text-align: center;
    }
  }
}
</style>