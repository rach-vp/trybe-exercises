const assert = require('assert');

const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    const error = new TypeError('parameters must be numbers');
    throw error;
  } else {
    return a + b;
  }
};

// 01. Is sum a function?
assert.strictEqual(typeof(sum), 'function', 'Sum is not a function');

// 02. 4 + 5 = 9
let expected = 9;
assert.strictEqual(sum(4, 5), expected, `Expected = ${expected}; Result = ${sum(4, 5)}`);

// 03. 0 + 0 = 0
expected = 0;
assert.strictEqual(sum(0, 0), expected, `Expected = ${expected}; Result = ${sum(0, 0)}`);

// 04. 4 + '5' return error
assert.throws(() => {
  sum(4, '5');
},
{
  name: 'TypeError',
  message: 'parameters must be numbers'
});

//05. error message = 'parameters must be numbers'
