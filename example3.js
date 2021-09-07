/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
module.exports = class Calculate {
  factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * (n - 1);
  }
};
