/*

Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

  Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
  Valor esperado no retorno da função: 2 .

*/

function checkRepetiton (array) {
  let maxRep = 0;
  let repElement;
  array = array.sort();
  for(let index = 0; index < array.length - 1; index += 1) {
    let rep = 1;
    while (array[index] === array[index + 1]) {
      rep += 1;
      index += 1;
    }
    if (rep > maxRep) {
      maxRep = rep;
      repElement = array[index]
    }
  }
  return repElement;
}

let array = [2, 3, 2, 5, 8, 2, 3];
console.log(`O caractere mais repetido é ${checkRepetiton(array)}.`);