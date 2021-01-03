// Imprime a média aritmética dos elementos do array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;

for (let i in numbers) {
  media += numbers[i];
}
media = media / numbers.length
console.log(`O valor da média aritmética dos elementos do array é ${media}`);
