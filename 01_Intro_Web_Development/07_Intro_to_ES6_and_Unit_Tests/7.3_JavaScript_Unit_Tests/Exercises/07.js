const assert = require('assert');

/*
01
const sumAllNumbers = arr => {};
*/

/*
02
*/
const sumAllNumbers = arr => {
  sum = 0;
  for (let index = 0; index < arr.length; index += 1) {
    sum += arr[index];
  }
  return sum;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
