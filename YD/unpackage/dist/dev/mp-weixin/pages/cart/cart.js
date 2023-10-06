"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  DetailItem();
}
const DetailItem = () => "./modules/detailItem.js";
const _sfc_main = {
  __name: "cart",
  setup(__props) {
    const drawerIsOpen = common_vendor.ref(true);
    const openOrCloseDrawer = () => {
      drawerIsOpen.value = !drawerIsOpen.value;
    };
    common_vendor.onShow(() => {
      const category = common_vendor.index.getStorageSync("category");
      console.log(category);
      const categoryKeyList = Object.keys(listHead.value);
      if (!category && categoryKeyList.length > 0) {
        activeListIndex.value = 0;
        activeListKey.value = categoryKeyList[0];
      }
      if (category) {
        activeListIndex.value = categoryKeyList.findIndex((el) => el === category);
        activeListKey.value = category;
      }
      common_vendor.index.removeStorageSync("category");
    });
    const activeListIndex = common_vendor.ref(0);
    const activeListKey = common_vendor.ref(null);
    common_vendor.ref([]);
    const listHead = common_vendor.ref({
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
    });
    const listData = common_vendor.ref({
      westernFastFood: [
        {
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
      beer: [
        {
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
        }
      ],
      snacks: [{
        title: "4个装的炸鸡翅",
        price: 24,
        delPrice: 30,
        source: ""
      }],
      more: []
    });
    common_vendor.onMounted(() => {
    });
    const clickCategoryItem = (categoryIndex, categoryKey) => {
      activeListKey.value = categoryKey;
      activeListIndex.value = categoryIndex;
    };
    const toSettle = () => {
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(listHead.value, (listHeadItem, listHeadKey, index) => {
          return {
            a: listHeadItem.source,
            b: common_vendor.t(listHeadItem.title),
            c: common_vendor.s(index === activeListIndex.value ? "color:#272C2F" : "color:#999999"),
            d: common_vendor.o(($event) => clickCategoryItem(index, listHeadKey), listHeadKey),
            e: common_vendor.s(index === activeListIndex.value ? "background-color:#FFFFFF" : "color:#F3F4F5"),
            f: listHeadKey
          };
        }),
        b: common_vendor.f(listData.value[activeListKey.value], (detailItem, detailKey, detailIndex) => {
          return {
            a: "610a82b8-0-" + detailIndex,
            b: common_vendor.p({
              detailObj: detailItem
            })
          };
        }),
        c: common_vendor.o(openOrCloseDrawer),
        d: common_vendor.o(toSettle),
        e: drawerIsOpen.value
      }, drawerIsOpen.value ? {
        f: common_vendor.f(listData.value[activeListKey.value], (detailItem, detailKey, detailIndex) => {
          return {
            a: "610a82b8-1-" + detailIndex,
            b: common_vendor.p({
              detailObj: detailItem
            })
          };
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Develop/YD-UNI/YD/pages/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
