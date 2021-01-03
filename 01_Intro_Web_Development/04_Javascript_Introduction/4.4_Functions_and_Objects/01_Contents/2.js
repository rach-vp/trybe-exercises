/*

Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:

Adição
Subtração
Multiplicação
Divisão
Módulo

*/

let a = 3;
let b = 2;
console.log(`Soma: ${sum(a , b)}`);
console.log(`Subtração: ${subtraction(a , b)}`);
console.log(`Multiplcação: ${multipication(a , b)}`);
console.log(`Divisão: ${division(a , b)}`);
console.log(`Módulo: ${module(a , b)}`);

function sum (a , b) {
  return(a + b);
}

function subtraction (a , b) {
  return(a - b);
}

function multipication (a , b) {
  return(a * b);
}

function division (a , b) {
  return(a / b);
}

function module (a , b) {
  return(a % b);
}
