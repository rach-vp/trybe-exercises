const phrase = ('Antônio foi ao banheiro e não sabemos o que aconteceu');

const longestWord = string => {
  const arrayOfStrings = string.split(' ');
  let greatestSize = 0;
  let greatestWordIndex;
  for (let index in arrayOfStrings) {
    if (arrayOfStrings[index].length > greatestSize) {
      greatestSize = arrayOfStrings[index].length;
      greatestWordIndex = index;
    }
  }
  return arrayOfStrings[greatestWordIndex];
}

console.log(`a maior palavra da frase é ${longestWord(phrase)}`);
