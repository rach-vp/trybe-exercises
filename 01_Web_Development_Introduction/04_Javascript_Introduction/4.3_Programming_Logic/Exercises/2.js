/*

2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
Copiar
n = 5

*
**
***
****
*****

*/

let n = 5;

if (n <=1 ) {
  console.log('Número inválido.');
} else {
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= i; j += 1) {
      if (j !== i) {
        process.stdout.write('*');
      } else {
        console.log('*');
      }
    }
  }
}
