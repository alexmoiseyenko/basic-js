const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = [];
  let addRes = [];
  let {repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|'} = options;

  if (addition !== undefined) {
    if (addition === null) {
      addition = 'null';
    }
    for (let j = 0; j < additionRepeatTimes; j++) {
      addRes.push(addition);
    }
    addRes = addRes.join(additionSeparator);
  }

  for(let i = 0; i < repeatTimes; i++) {
    res.push(str + addRes);
  }

  res = res.join(separator)

  return res;
};
  