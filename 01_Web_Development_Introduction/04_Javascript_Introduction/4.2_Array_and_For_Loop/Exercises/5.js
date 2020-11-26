// Imprime o maior elemento do array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (let i in numbers) {
  if (numbers[i] > maior) {
    maior = numbers[i];
  }
}
console.log(`O valor do maior elemento do array é ${maior}.`);
