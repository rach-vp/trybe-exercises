// Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplied = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index === numbers.length - 1) {
    multiplied.push(numbers[index] * 2);
  } else {
    multiplied.push(numbers[index] * numbers[index + 1]);
  }
}

console.log(`Array multiplicado: ${multiplied}`);
