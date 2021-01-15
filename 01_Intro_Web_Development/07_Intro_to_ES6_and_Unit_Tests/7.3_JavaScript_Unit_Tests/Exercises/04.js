const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// 01. Test for return fizzbuzz
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');

//02. Test for return fizz
assert.strictEqual(myFizzBuzz(18), 'fizz');

//03. Test for return buzz
assert.strictEqual(myFizzBuzz(20), 'buzz');

//04. Test for false
assert.strictEqual(myFizzBuzz(17), 17);

//05. Test for NaN
assert.strictEqual(myFizzBuzz('xablau'), false);
