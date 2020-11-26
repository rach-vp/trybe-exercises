// Utilizando o array do exercício 9, imprimir o resultado da divisão de cada elemento por 2

let numbers = []

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(`Array final: ${numbers}`);

let arrayHalf = []

for (let index = 1; index <= 25; index += 1) {
  arrayHalf.push(index/2);
}

console.log(`Array anterior com elementos dividos por 2: ${arrayHalf}`);
