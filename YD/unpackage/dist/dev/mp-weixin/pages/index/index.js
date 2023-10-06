"use strict";
const common_vendor = require("../../common/vendor.js");
const utiils_uni = require("../../utiils/uni.js");
if (!Array) {
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  _easycom_uni_swiper_dot2();
}
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
if (!Math) {
  (_easycom_uni_swiper_dot + ShopCard)();
}
const ShopCard = () => "./modules/shopCard.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref("Index");
    const info = common_vendor.ref([{
      content: "../../static/images/shutiao.jpg"
    }, {
      content: "../../static/images/jichi.jpg"
    }, {
      content: "../../static/images/huasheng.jpg"
    }]);
    const current = common_vendor.ref(0);
    const mode = common_vendor.ref("default");
    common_vendor.ref(0);
    const dotStyles = common_vendor.ref({
      backgroundColor: "rgba(0, 0, 0, .3)",
      border: "1px rgba(0, 0, 0, .3) solid",
      color: "#fff",
      selectedBackgroundColor: "rgba(0, 0, 0, .9)",
      selectedBorder: "1px rgba(0, 0, 0, .9) solid"
    });
    const change = (e) => {
      current.value = e.detail.current;
    };
    const classificationBarClick = (category) => {
      common_vendor.index.setStorageSync("category", category);
      utiils_uni.switchTab("/pages/cart/cart");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => classificationBarClick("beer")),
        b: common_vendor.o(($event) => classificationBarClick("hotpot")),
        c: common_vendor.o(($event) => classificationBarClick("snacks")),
        d: common_vendor.o(($event) => classificationBarClick("more")),
        e: common_vendor.f(info.value, (item, index, i0) => {
          return {
            a: item.content,
            b: index
          };
        }),
        f: common_vendor.o(change),
        g: current.value,
        h: common_vendor.p({
          ["dots-styles"]: dotStyles.value,
          info: info.value,
          current: current.value,
          field: "content",
          mode: mode.value
        }),
        i: common_vendor.p({
          price: 24,
          title: "超级好吃的鸡翅"
        }),
        j: common_vendor.p({
          price: 24,
          title: "超级好吃的鸡翅"
        }),
        k: common_vendor.p({
          price: 24,
          title: "超级好吃的鸡翅"
        }),
        l: common_vendor.p({
          price: 24,
          title: "超级好吃的鸡翅"
        }),
        m: common_vendor.p({
          price: 24,
          title: "超级好吃的鸡翅"
        }),
        n: common_vendor.p({
          price: 24,
          title: "超级好吃的鸡翅"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Develop/YD-UNI/YD/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
