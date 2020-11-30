/*

Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

Bonus: use somente um if.

*/ 

let a = 5;
let b = 1;
let c = 78;
pair(a , b , c);

function pair (a , b , c) {
    if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
        console.log('Há pelo menos um número par nesse conjunto.');
    } else {
        console.log('Não há nenhum número par nesse conjunto.');
    }
}
