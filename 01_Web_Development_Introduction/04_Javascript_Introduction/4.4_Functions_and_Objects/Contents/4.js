/*

Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

*/

let a = 3;
let b = 2;
let c = 10;
console.log(`O maior número é ${higher(a , b , c)}`);

function higher(a , b) {
  if (a > b && a > c) {
    return(a);
  } else if (b > a && b > c) {
      return(b);
  } else if (c > a && c > b) {
      return(c);
  }
}
