
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  return names.reduce((acc, name) => {
    return acc + name.match(/a/ig).length;
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);