const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    var depth = 0;
    for (var i=0; i<arr.length; i++) {
      if (Array.isArray(arr[i])) {
        depth = Math.max(this.calculateDepth(arr[i]), depth);
      }
    }
    return depth+1;
  }
};