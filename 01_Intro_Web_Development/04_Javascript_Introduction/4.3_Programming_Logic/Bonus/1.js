/*

5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
Copiar
Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******

*/

let n = 7;
let whiteSpace = ' ';
let filledSpace = '*';

if (n <= 1) {
  console.log('Número inválido.');
} else {
  // Número de linhas = n/2, mas se n for ímpar é n/2 + 1 (ou n/2 arredondado pra cima)
  for (let i = Math.round(n / 2); i >= 1; i -= 1) { // Determina a quantidade de linhas
    for (let j = Math.trunc(n / 2) * (-1); j <= Math.trunc(n / 2); j += 1) {
      if (i === 1) {
         process.stdout.write(filledSpace);
      }else if (Math.abs(j) != Math.round(n / 2) - i) {
        process.stdout.write(whiteSpace);
      }
      else {
        process.stdout.write(filledSpace);
      }
    }
    console.log(whiteSpace);
  }
}
