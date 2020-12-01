/*

Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

*/

let a = 3;
console.log(`O número ${a} é ${zero(a)}.`);

function zero(a) {
  if (a > 0) {
    return('positivo');
  }
  else if (a < 0) {
      return('negativo');
  }
  else {
      return('nulo');
  }
}
