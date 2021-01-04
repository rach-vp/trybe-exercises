/*

Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

  Array de teste: [2, 3, 6, 7, 10, 1]; .
  Valor esperado no retorno da função: 4 .

*/

function checkIndexHigher (array) {
  let indexHigher;
  let higher = 0;
  for (let index in array) {
    if (array[index] > higher) {
      higher = array[index];
      indexHigher = index;
    }
  }
  return indexHigher;
}

let array = [2, 3, 6, 7, 10, 1];
console.log(`O index com o elemento de maior valor do array é ${checkIndexHigher(array)}.`);