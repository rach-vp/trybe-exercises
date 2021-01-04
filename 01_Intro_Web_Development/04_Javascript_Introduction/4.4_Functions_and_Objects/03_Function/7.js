/*

Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
  
  Valor de teste: "trybe" e "be"
  Valor esperado no retorno da função: true
  verificaFimPalavra("trybe", "be") ;
  Retorno esperado: true
  verificaFimPalavra("joaofernando", "fernan") ;
  Retorno esperado: false

*/

function checkEnding (stringWord, stringEnd) {
  let check = true;
  stringWord.split('').reverse().join('');
  stringEnd.split('').reverse().join('');
  for (let index = stringEnd.length - 1; index >= 0; index -= 1) {
    if (stringWord[index] !== stringEnd[index]) {
      check = false;
    }
  }
  return check;
}

let stringWord = 'florzinha';
let stringEnd = 'tesla';
if (stringEnd.length > stringWord.length) {
  console.log('Impossible');
} else {
  console.log(checkEnding (stringWord, stringEnd));
}
