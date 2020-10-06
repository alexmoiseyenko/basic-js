const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let currentDepth = 1;
    arr.forEach(item => {
      if (Array.isArray(item)) {
        currentDepth += this.calculateDepth(item);
      }
      depth = Math.max(depth, currentDepth);
      currentDepth = 1;
    });

    return depth;
  }
};

