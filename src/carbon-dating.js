const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity < 0 || sampleActivity > MODERN_ACTIVITY ||
    typeof sampleActivity !== 'string' || !Number(sampleActivity)) {
    return false;
  }

  return (Math.log(MODERN_ACTIVITY/sampleActivity) / (0.693 * HALF_LIFE_PERIOD));
};
