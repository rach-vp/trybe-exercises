// Somar todos os elementos do array e imprimir o resultado

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i in numbers) {
  soma += numbers[i];
}
console.log(`O valor da soma dos elementos do array é ${soma}`);
