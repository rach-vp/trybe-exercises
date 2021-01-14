const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  let vowelNumber = 0;
  let results = [];

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      results.push(vowelNumber += 1);
    } else {
      results.push(characters[i]);
    }
  }
  results = results.join('');
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowels(parameter), 'string');
assert.strictEqual(removeVowels(parameter).length, result.length);
assert.deepStrictEqual(removeVowels(parameter), result);
