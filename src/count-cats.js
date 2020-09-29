const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catsNum = 0;
  matrix.forEach(item => {
    item.forEach(i => {
      if (i === '^^') {
        catsNum++;
      }
    })
  })

  return catsNum
};
