// Imprime o menor elemento no array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = Infinity;  // Para atribuir um valor muito grande à variável

for (let i in numbers) {
  if (numbers[i] < menor) {
    menor = numbers[i];
  }
}
console.log(`O valor do menor elemento do array é ${menor}.`);
