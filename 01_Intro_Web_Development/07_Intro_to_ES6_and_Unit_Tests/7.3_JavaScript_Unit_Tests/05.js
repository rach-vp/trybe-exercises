//Create function addOne to pass in all tests
const assert = require('assert');

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];

/*
01
const addOne = arr => {}
*/

/*
02
const addOne = arr => {
  for (let index = 0; index < arr.length; index += 1) {
    arr[index] += 1;
  }
  return arr;
};
*/

/*
03
*/
const addOne = arr => {
  newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    newArr.push(arr[index] + 1);
  }
  return newArr;
};

const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
