const assert = require('assert');
function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 01. Removes item correctly
assert.deepStrictEqual(myRemove([1, 2, 3, 4, 5], 3), [1, 2, 4, 5]);

//02. item = 3, newArr = [1, 2, 4, 5]
assert.deepStrictEqual(myRemove([1, 2, 3, 4, 5], 3), [1, 2, 4, 5]);

//03. Test above doesn't return [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4, 5], 3), [1, 2, 3, 4]);
