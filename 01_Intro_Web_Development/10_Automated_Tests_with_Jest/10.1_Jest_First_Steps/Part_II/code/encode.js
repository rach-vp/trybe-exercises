const dict = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
};

function encode(decodedString) {
  return decodedString.split('')
    .map(char => Object.keys(dict).includes(char) ? dict[char] : char)
    .join('');
}

module.exports = encode;