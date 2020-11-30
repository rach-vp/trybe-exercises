/*

Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

*/

let a = 3;
let b = 2;
console.log(`O maior número é ${higher(a , b)}`);

function higher(a , b) {
  if (a > b) {
    return(a);
  } else {
      return(b);
  }
}
