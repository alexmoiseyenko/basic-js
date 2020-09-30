const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!arr) {
    throw new Error('Not an Array');
  }

  let copyArr = arr.slice();
  let res = []

  if (!arr.length) {
    return [];
  }

  let count = 0;

  copyArr.forEach((item, idx) => {
    if (item === '--discard-next') {
      if (copyArr[idx + 2] !== '--discard-prev') {
        copyArr.splice(idx + 1, 1);
      }
    } else if (item === '--discard-prev') {
      res.splice(res.length - 1, 1);
    } else if (item === '--double-next') {
      res.push(copyArr[idx + 1]);
    } else if (item === '--double-prev') {
      if (res.length && copyArr[idx - 1] !== '--discard-next') {
        res.splice(res.length - 1, 0, res[res.length - 1]);
      }
    } else {
      count++;
      res.push(item);
    }
  });

  if (count === arr.length) {
    return arr;
  }

  return res.filter(item => item !== undefined);
};
