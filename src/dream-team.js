const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !members.length) {
    return false;
  }

  let name = members.reduce((acc, item) => {
    if (typeof item === 'string') {
      return acc + item.trim()[0];
    } else {
      return acc;
    }
  }, '');

  return name.toUpperCase().split('').sort().join('');
};
