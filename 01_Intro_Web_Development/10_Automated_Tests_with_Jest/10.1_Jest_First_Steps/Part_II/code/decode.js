const dict = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
};

function decode(encodedString) {
  return encodedString.split('')
    .map(char => Object.values(dict).includes(char) ?
    (Object.entries(dict)[Object.values(dict).indexOf(char)][0]) : char)
    .join('');
}

module.exports = decode;
