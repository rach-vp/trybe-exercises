/*

Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

Bonus: use somente um if.

*/ 

let a = 6;
let b = 2;
let c = 4;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    console.log('Há pelo menos um número ímpar nesse conjunto.');
}
else {
    console.log('Não há nenhum número ímpar nesse conjunto.');
}
