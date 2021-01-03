/*

Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

  Valor de teste: N = 5 .
  Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

*/

function gaussSum (n) {
  let sum = 0;
  for(let index = n; index > 0; index -= 1) {
    sum += index;
  }
  return sum;
}

let n = 5;
console.log(`O valor da soma Gaussiana do número é ${gaussSum(n)}.`);