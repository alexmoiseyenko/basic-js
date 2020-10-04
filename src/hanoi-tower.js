const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let res = {};
  res.turns = Math.pow(2, disksNumber) - 1;
  res.seconds = Math.floor(3600 / turnsSpeed * res.turns);
  return res;
};
