const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let season = 'Unable to determine the time of year!';
  if (!arguments.length) {
    return season;
  }

  if (!date || date.hasOwnProperty('toString')) {
    throw new Error('FAIL');
  }

  switch (date.getMonth()) {
    case 2:
    case 3:
    case 4:
      season = 'spring';
      break;

    case 5:
    case 6:
    case 7:
      season = 'summer';
      break;

    case 8:
    case 9:
    case 10:
      season = 'autumn';
      break;

    case 0:
    case 1:
    case 11:
      season = 'winter';
      break;
  }

  return season;
};
