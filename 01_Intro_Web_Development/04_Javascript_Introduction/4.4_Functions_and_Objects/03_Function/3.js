/*

Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

  Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
  Valor esperado no retorno da função: 6 .

*/

function checkIndexLower (array) {
  let indexLower;
  let lower = Infinity;
  for (let index in array) {
    if (array[index] < lower) {
      lower = array[index];
      indexLower = index;
    }
  }
  return indexLower;
}

let array = [2, 4, 6, 7, 10, 0, -3];
console.log(`O index com o elemento de menor valor do array é ${checkIndexLower(array)}.`);