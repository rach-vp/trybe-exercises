const assert = require('assert');

/*
01
const wordLengths = arr => {};
*/

/*
02
*/
const wordLengths = arr => {
  arrLength = [];
  for (let index = 0; index < arr.length; index += 1) {
    arrLength.push(arr[index].length);
  }
  return arrLength;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
