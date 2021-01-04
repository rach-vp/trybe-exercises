/*

Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

Bonus: use somente um if.

*/

let a = 50;
let b = 12;
let c = 78;
odd(a , b , c);

function odd(a , b , c) {
    if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
        console.log('Há pelo menos um número ímpar nesse conjunto.');
    }
    else {
        console.log('Não há nenhum número ímpar nesse conjunto.');
    }   
}
