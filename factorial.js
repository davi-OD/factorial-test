/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* David Odie and Arnold Kato */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */

module.exports = class Calculate {
  factorial(n) {
    let result = 1;
    if (n === 0 || n === 1) {
    return result;
  }
  for (let i = n;
    i >= 1;
    i--) {
    result *= i;
  }
  return result;
  }
};
