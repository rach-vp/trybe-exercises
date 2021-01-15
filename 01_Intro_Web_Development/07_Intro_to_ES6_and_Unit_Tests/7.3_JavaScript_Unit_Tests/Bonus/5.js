const assert = require('assert');

const notEmptyPassword = str => str.length ? true : false;
const passwordRightSize = str => str.length < 8 ? false : true;
const atLeastOneUpperCase = str => /(?=.*[A-Z])/.test(str);
const atLeastOneLowerCase = str => /(?=.*[a-z])/.test(str);
const atLeastOneNumber = str => /(?=.*\d)/.test(str);

const verify = password => {
  if (typeof password !== 'string') {
    throw new TypeError('Password must be a string');
  }
  if (!atLeastOneLowerCase(password)) {
    throw new TypeError('Password must follow at least 3 of the mandatory rules and contain at least one letter');
  }
  const testArr = [notEmptyPassword(password), passwordRightSize(password), atLeastOneUpperCase(password), atLeastOneNumber(password)];
  let count = 0;
  index = 0;
  for (const test of testArr) {
    if (test) {
      count += 1;
    }
    index++;
  }
  if (count < 2) {
    throw new TypeError('Password must follow at least 3 of the mandatory rules and contain at least one letter');
  }
  return true;
};

assert.strictEqual(typeof verify, 'function', 'Function not defined');
assert.strictEqual(typeof verify('Passw0rd'), 'boolean');
assert.throws(() => {
  verify(123);
},
{
  name: 'TypeError',
  message: 'Password must be a string'
});
// Password must be larger than 8 chars
assert.throws(() => {
  verify('short');
},
{
  name: 'TypeError',
  message: 'Password must follow at least 3 of the mandatory rules and contain at least one letter',
})

// Password should not be null
assert.throws(() => {
  verify('');
},
{
  name: 'TypeError',
  message: 'Password must follow at least 3 of the mandatory rules and contain at least one letter',
});

// Password should have one uppercase letter at least
// Password should have one lowercase letter at least <---- MANDATORY
// Password should have one number at least
// Password is OK if at least three of the previous conditions is true
assert.strictEqual(verify('password'), true);
assert.strictEqual(verify('Password'), true);
assert.strictEqual(verify('passw0rd'), true);

// Password is never OK if item 1.4 is not true
assert.throws(() => {
  verify('12345678');
},
{
  name: 'TypeError',
  message: 'Password must follow at least 3 of the mandatory rules and contain at least one letter',
});
