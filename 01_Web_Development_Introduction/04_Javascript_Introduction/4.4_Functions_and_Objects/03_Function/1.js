/*

Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
  
Exemplo de palíndromo: arara .
  verificaPalindrome("arara") ;
  Retorno esperado: true
  verificaPalindrome("desenvolvimento") ;
  Retorno esperado: false

*/

function checkPalindrome (string) {
  if (string === string.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

let string = 'tesla';
console.log(checkPalindrome(string));