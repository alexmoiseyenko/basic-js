const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (reverse = true) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    if (!key || !message || key.length === 0 || message.length === 0) {
      throw new Error('THROWN');
    }
    let plaintextArr = message.toUpperCase().split('');
    let keywordCount = 0;
    let keyWordArr = key.toUpperCase().split('');
    let firstAllowedNum = 65;
    let lastAllowedNum = 90;
    let res = plaintextArr.map((item, idx) => {
      if (!item.match(/[A-Z]/)) {
        return item;
      }
      if (keywordCount === keyWordArr.length) {
        keywordCount = 0;
      }

      let firstLetterNum = item.charCodeAt(0);
      let secondLetterNum = keyWordArr[keywordCount++].charCodeAt(0);
      let shiftNum = secondLetterNum - 'A'.charCodeAt(0);
      return firstLetterNum + shiftNum < (lastAllowedNum + 1) ?
        String.fromCharCode(firstLetterNum + shiftNum) :
        String.fromCharCode((firstLetterNum + shiftNum - lastAllowedNum) + (firstAllowedNum - 1));
    })

    return res.join('');
  }
  decrypt(encryptedMessage, key) {
    if (!key || !encryptedMessage || key.length === 0 || encryptedMessage.length === 0) {
      throw new Error('THROWN');
    }
    let encryptMessageArr = this.reverse ? encryptedMessage.split('') : encryptedMessage.split('').reverse();
    let keywordCount = 0;
    let keyWordArr = key.toUpperCase().split('');
    let firstAllowedNum = 65;
    let lastAllowedNum = 90;
    let res = encryptMessageArr.map((item) => {
      if (!item.match(/[A-Z]/)) {
        return item;
      }
      if (keywordCount === keyWordArr.length) {
        keywordCount = 0;
      }

      let firstLetterNum = item.charCodeAt(0);
      let secondLetterNum = keyWordArr[keywordCount++].charCodeAt(0);
      let shiftNum = firstLetterNum - secondLetterNum;
      return 'A'.charCodeAt(0) + shiftNum < firstAllowedNum ?
        String.fromCharCode((lastAllowedNum + 1) + shiftNum) :
        String.fromCharCode('A'.charCodeAt(0) + shiftNum);
    });

    return this.reverse ? res.join('') : res.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
