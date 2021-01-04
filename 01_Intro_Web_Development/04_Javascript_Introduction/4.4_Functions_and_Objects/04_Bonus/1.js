/*

(Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!

  Dicas:
    Uma string é um array de caracteres, então cada elemento do array é uma letra.
    O valor de cada numeral romano é:
  
      | I   | 1    |
      | --- | ---- |
      | IV  | 4    |
      | V   | 5    |
      | IX  | 9    |
      | X   | 10   |
      | XL  | 40   |
      | L   | 50   |
      | XC  | 90   |
      | C   | 100  |
      | CD  | 400  |
      | D   | 500  |
      | CM  | 900  |
      | M   | 1000 |

    Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
    
    Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

*/

let romanNumDictionary = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
let romanNum = 'MLDVI';
let arabicNum  = 0;

// Fica mais fácil varrer da direita para a esquerda para detectar a ocorrência de números como 4, 9, 40, 90, 400 e 900
// Nesses casos ocorrerá de o valor da chave diminuir e depois aumentar, não continuar aumentando normalmente conforme as casas numéricas aumentam
for (let index = romanNum.length - 1; index >=0; index -= 1) {
  if (index === romanNum.length - 1) {  //Essa verificaçao existe para não estourar o array quando chegar na última casa
    arabicNum += romanNumDictionary[romanNum[index]];
  } else {
    if (romanNumDictionary[romanNum[index]] < romanNumDictionary[romanNum[index + 1]]) {
      arabicNum -= romanNumDictionary[romanNum[index]];
    } else {
      arabicNum += romanNumDictionary[romanNum[index]];
    }
  }
}

console.log(`Seu número romano ${romanNum} é igual ao número arábico ${arabicNum}`);
