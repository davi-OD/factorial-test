/* eslint-disable linebreak-style */
/* David Odie and Arnold Kato */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
const { assert } = require('chai');

function factorial(n) {
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
const n = 5;
const result = factorial(n);
console.log(`The factorial of ${n} is ${result}`);
describe('Test last for factorial function', () => {
  it('Check if 120 is a factorial of 5', () => {
    assert.equal(120, result, 'Is true');
  });
  it('Check if 50 is a factorial of 5', () => {
    assert.equal(50, result, 'Is false');
  });
});
