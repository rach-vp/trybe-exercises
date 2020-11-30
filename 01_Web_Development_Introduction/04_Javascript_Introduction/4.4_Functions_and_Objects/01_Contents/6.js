/*

Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

*/

let a = 30;
let b = 90;
let c = 45;
triangule(a , b , c);

function triangule(a , b , c) {
  if (a + b + c === 180 ) {
    console.log('Os ângulos podem ser de um triângulo.');
  }
  else {
      console.log('Os ângulos não podem ser de um triângulo.');
  }
}
