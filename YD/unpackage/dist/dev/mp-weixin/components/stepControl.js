"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "stepControl",
  emits: "sub",
  setup(__props, { emit }) {
    const stepNum = common_vendor.ref(0);
    const sub = () => {
      stepNum.value--;
      console.log(stepNum.value);
      emit("sub");
    };
    const add = () => {
      stepNum.value++;
      console.log(stepNum.value);
      emit("add");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: stepNum.value > 0
      }, stepNum.value > 0 ? {
        b: common_vendor.o(($event) => sub()),
        c: common_vendor.t(stepNum.value),
        d: common_vendor.o(($event) => add())
      } : {}, {
        e: stepNum.value <= 0
      }, stepNum.value <= 0 ? {
        f: common_vendor.o(($event) => add())
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-280cd8ed"], ["__file", "D:/Develop/YD-UNI/YD/components/stepControl.vue"]]);
wx.createComponent(Component);
