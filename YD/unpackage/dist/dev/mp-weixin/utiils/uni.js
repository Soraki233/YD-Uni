"use strict";
const common_vendor = require("../common/vendor.js");
const switchTab = (url) => {
  return new Promise((resove, reject) => {
    common_vendor.index.switchTab({
      url,
      success(res) {
        resove(res);
      },
      fail(err) {
        reject(err);
      }
    });
  });
};
exports.switchTab = switchTab;
