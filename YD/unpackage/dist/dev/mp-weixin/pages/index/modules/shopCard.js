"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "shopCard",
  props: {
    price: Number,
    title: String
  },
  setup(__props) {
    const props = __props;
    common_vendor.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(props.title || ""),
        b: common_vendor.t(props.price || "")
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Develop/YD-UNI/YD/pages/index/modules/shopCard.vue"]]);
wx.createComponent(Component);
