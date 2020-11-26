// Imprime a média aritmética dos elementos do array e informa se é maior que 20

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;

for (let i in numbers) {
  media += numbers[i];
}
media = media / numbers.length
if (media > 20) {
  console.log(`O valor da média aritmética dos elementos do array é ${media} e é maior que 20`);
} else {
  console.log(`O valor da média aritmética dos elementos do array é ${media} e é manor ou igual a 20`);
}
