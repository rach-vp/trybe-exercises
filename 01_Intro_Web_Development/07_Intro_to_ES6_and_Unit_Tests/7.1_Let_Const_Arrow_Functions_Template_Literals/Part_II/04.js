const phrase = 'Trybe x aqui!';
const word = 'oie'

const searchX = (phrase, word) => phrase.replace('x', word);

console.log(`Replacing the word x for "${word}" in phrase "${phrase}" results in ${searchX(phrase, word)}`);
