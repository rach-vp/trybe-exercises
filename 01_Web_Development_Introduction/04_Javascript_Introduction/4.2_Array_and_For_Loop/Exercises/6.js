// Imprime a média aritmética dos elementos do array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contOdd = 0;

for (let i in numbers) {
  if (numbers[i] % 2 !== 0) {
    contOdd += 1;
  }
}
if (contOdd > 0) {
  console.log(`Existem ${contOdd} elementos ímpares no array.`);
} else {
  console.log(`Não existem elemento ímpares no array.`);
}
