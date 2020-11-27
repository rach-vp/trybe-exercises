/*

1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

n = 5

*****
*****
*****
*****
*****

*/

let n = 5;

/*

Para imprimir sem quebra de linha utilizou-se as dicas no link abaixo:

geeksforgeeks.org/how-to-print-console-without-trailing-newline-in-node-js/

*/

if (n <=1 ) {
  console.log('Número inválido.');
} else {
  for (let i = 0; i < n; i += 1) {
    for (let j = n; j > 0; j -= 1) {
      if (j > 1) {
        process.stdout.write('*')
      } else {
        console.log('*')
      }
    }
  }
}
