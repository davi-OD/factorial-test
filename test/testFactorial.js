/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const chai = require('chai');
const Calculate = require('../factorial');

const { assert } = chai;

describe('Test last for factorial function', () => {
  const result = new Calculate();
  it('Check factorial of -2', () => {
    assert.equal(result.factorial(-2), 1);
  });
  it('Check factorial of -1', () => {
    assert.equal(result.factorial(-1), 1);
  });
  it('Check factorial of 0', () => {
    assert.equal(result.factorial(0), 1);
  });
  it('Check factorial of 1', () => {
    assert.equal(result.factorial(1), 1);
  });
  it('Check factorial of 2', () => {
    assert.equal(result.factorial(2), 2);
  });
  it('Check factorial of 3', () => {
    assert.equal(result.factorial(3), 6);
  });
  it('Check factorial of 13678000', () => {
    assert.notEqual(result.factorial(13678000), 6);
  });
  it('Check factorial of 13678', () => {
    assert.equal(result.factorial(13678000), 7.6208483379e+3694);
  });
});
