/*

Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

  Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
  Valor esperado no retorno da função: Fernanda .

*/

function checkCharAmmount (array) {
  let max = 0;
  let name;
  for(let index in array) {
    if(array[index].length > max) {
      max = array[index].length;
      name = array[index];
    }
  }
  return name;
}

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(`O array com mais caracteres é ${checkCharAmmount(array)}.`);