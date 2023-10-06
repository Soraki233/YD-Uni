<template>
  <view class="cart">
    <view class="cart-container">
      <view class="category-list">
        <template :key="listHeadKey" v-for="(listHeadItem, listHeadKey, index) in listHead">
          <view class="category-item" @click="clickCategoryItem(index, listHeadKey)"
                :style="index === activeListIndex ? 'background-color:#FFFFFF' : 'color:#F3F4F5'">
            <view class="category-image">
              <image :src="listHeadItem.source"></image>
            </view>
            <view class="category-title" :style="index === activeListIndex ? 'color:#272C2F' : 'color:#999999'">
              {{ listHeadItem.title }}
            </view>
          </view>
        </template>
      </view>
      <view class="details-container">
        <template v-for="(detailItem, detailKey, detailIndex) in listData[activeListKey]">
          <DetailItem :detailObj="detailItem"/>
        </template>
      </view>
    </view>

    <!-- 购物车 -->
    <view class="cart-settle">
      <view class="cart-settle-container">
        <view class="logo" @click="openOrCloseDrawer">
          <image src="../../static/logo.jpg">

          </image>
          <!-- <view class="tag">0</view> -->
        </view>
        <view class="price">￥999.99</view>
        <view class="button" @click="toSettle">去结算</view>
      </view>

    </view>

    <!-- 购物车抽屉 -->
    <view class="cart-drawer" v-if="drawerIsOpen">
      <view class="cart-drawer-container">
        <view class="cart-drawer-ini">
          <view class="drawer-head">
            <view style=""></view>
            <view class="clear">
              <image class="clear-image" src="../../static/icons/delete.png"></image>
              清空购物车
            </view>
          </view>
          <view class="drawer">
            <template v-for="(detailItem, detailKey, detailIndex) in listData[activeListKey]">
              <DetailItem :detailObj="detailItem"/>
            </template>
            <view style="height: 150rpx;"></view>
          </view>
        </view>

        <!-- <veiw class="drawer-swiper-container" style="height:550rpx;"> -->

        <!-- </veiw> -->
      </view>
    </view>
  </view>
</template>

<script setup>
import DetailItem from './modules/detailItem.vue'
import {
  onMounted,
  ref
} from "vue";

import {
  onLoad,
  onReady,
  onShow
} from '@dcloudio/uni-app'

const drawerIsOpen = ref(true)
const openOrCloseDrawer = () => {
  drawerIsOpen.value = !drawerIsOpen.value
}

onShow(() => {
  // 获取参数
  const category = uni.getStorageSync('category')
  console.log(category);
  const categoryKeyList = Object.keys(listHead.value)
  // 如果不是点击选项卡进入当前页面就默认选择第一个选项卡
  if (!category && categoryKeyList.length > 0) {
    activeListIndex.value = 0
    activeListKey.value = categoryKeyList[0]
  }
  // 如果是点击进入当前
  if (category) {
    activeListIndex.value = categoryKeyList.findIndex(el => el === category)
    activeListKey.value = category
  }
  uni.removeStorageSync('category')
})

// 当前活跃的选项卡索引
const activeListIndex = ref(0)
// 当前活跃的选项卡索引的key
const activeListKey = ref(null)
const activeDetails = ref([])
// 左侧选项卡数据
const listHead = ref({
  westernFastFood: {
    title: "西式简餐",
    source: "../../static/icons/snacks.png"
  },
  beer: {
    title: "酒水",
    source: "../../static/icons/snacks.png"
  },
  snacks: {
    title: "小食",
    source: "../../static/icons/snacks.png"
  },
  hotpot: {
    title: "火锅",
    source: "../../static/icons/hotpot.png"
  },
  more: {
    title: "更多",
    source: "../../static/icons/more.png"
  }
})

const listData = ref({
  westernFastFood: [{
    title: "老郭秘制小汉堡",
    price: 24,
    delPrice: 35,
    source: ""
  },
    {
      title: "每一根都很粗的薯条",
      price: 16,
      delPrice: 20,
      source: "../../../static/images/shutiao.jpg"
    }
  ],
  beer: [{
    title: "德式小麦",
    price: 18,
    delPrice: 20,
    source: ""
  },
    {
      title: "比利时小麦",
      price: 18,
      delPrice: 20,
      source: ""
    },
    {
      title: "小麦王",
      price: 28,
      delPrice: 30,
      source: ""
    },
  ],
  snacks: [{
    title: "4个装的炸鸡翅",
    price: 24,
    delPrice: 30,
    source: ""
  }],
  more: []
})

onMounted(() => {

})

const clickCategoryItem = (categoryIndex, categoryKey) => {
  activeListKey.value = categoryKey
  activeListIndex.value = categoryIndex

  // activeDetails.value = listData.value.findIndex((el) => {)
}

const toSettle = () => {
  // uni.navigateTo({
  //
  // })
}
</script>

<style lang="less">
.cart {
  min-height: 100vh;

  background-color: #f3f4f5;

  .cart-container {
    min-height: 100vh;
    display: flex;
    // width: 200rpx;
    // background-color: #fff;

    .category-list {
      width: 150rpx;
      background-color: #f3f4f5;

      .category-item {
        font-size: 25rpx;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 150rpx;
        width: 150rpx;
        // border: 1px solid black;

        .category-image {
          width: 40rpx;
          height: 45rpx;

          image {
            width: 40rpx;
            height: 40rpx;
          }
        }

        .category-title {
          margin-top: 18rpx;
          color: #99999;
        }
      }
    }

    .details-container {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      // border: 1px solid black;
      width: 100%;
    }
  }

  .cart-settle {
    .cart-settle-container {
      z-index: 10;
      // overflow: hidden;
      background-color: #212526;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100rpx;
      // border: 1px solid black;
      position: fixed;
      width: 700rpx;
      bottom: 40rpx;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 50rpx;
    }

    .logo {
      margin-left: 40rpx;
      height: 140rpx;
      width: 140rpx;
      overflow: hidden;
      border-radius: 50%;
      position: relative;

      image {
        height: 140rpx;
        width: 140rpx;
      }

      .tag {
        border-radius: 50%;
        right: 0;
        top: 20rpx;
        z-index: 10;
        position: absolute;
        width: 30rpx;
        height: 30rpx;
        line-height: 30rpx;
        text-align: center;
        background-color: red;
        color: #fff;
      }
    }

    .price {
      color: #fff;
      font-size: 36rpx;
      margin-right: 150rpx;
    }

    .button {
      border-radius: 0 50rpx 50rpx 0;
      background-color: #1D6D41;
      color: #fff;
      height: 100rpx;
      width: 180rpx;
      font-size: 30rpx;
      text-align: center;
      line-height: 100rpx;
    }
  }

  .cart-drawer {
    .cart-drawer-container {
      height: 100vh;
      position: fixed;
      background-color: rgba(0, 0, 0, 0.3);
      width: 100%;
      bottom: 0;
      left: 0;
      right: 0;

      .cart-drawer-ini {
        border-radius: 20rpx 20rpx 0 0;
        overflow: hidden;
        height: 620rpx;
        background-color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        .drawer-head {
          display: flex;
          justify-content: space-between;
          padding: 0 20rpx 0 20rpx;
          height: 50rpx;
          line-height: 50rpx;
          // border: 1rpx solid black;

          .clear {
            width: fit-content;
            font-size: 20rpx;
            display: flex;
            align-items: center;
            color: #B2B2B2;

            .clear-image {
              width: 20rpx;
              height: 20rpx;
            }
          }
        }

        .drawer {
          height: 570rpx;
          // border: 1rpx solid blcck;
          background-color: #fff;
          overflow-y: auto;
          margin-bottom: 350rpx;
          width: 100%;
        }

        .drawer::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
}
</style>