"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  StepControl();
}
const StepControl = () => "../../../components/stepControl.js";
const _sfc_main = {
  __name: "detailItem",
  props: {
    detailObj: Object
  },
  setup(__props) {
    const props = __props;
    common_vendor.ref(0);
    common_vendor.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: props.detailObj.source,
        b: common_vendor.t(props.detailObj.title),
        c: common_vendor.t(props.detailObj.price)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Develop/YD-UNI/YD/pages/cart/modules/detailItem.vue"]]);
wx.createComponent(Component);
