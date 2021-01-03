/*

3- Agora inverta o lado do triângulo. Por exemplo:
Copiar
n = 5

    *
   **
  ***
 ****
*****
Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

*/

let n = 5;
let whiteSpace = ' ';
let filledSpace = '*';

if (n <=1 ) {
  console.log('Número inválido.');
} else {
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      if (j <= n - i) {
        process.stdout.write(whiteSpace);
      } else if (j < n) {
        process.stdout.write(filledSpace);
      } else {
        console.log(filledSpace);
      }
    }
  }
}
