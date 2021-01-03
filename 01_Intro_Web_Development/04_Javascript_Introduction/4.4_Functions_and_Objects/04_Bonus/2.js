/*

Para o próximo exercício você irá precisar ter uma conta no CodeWars , para entender como fazê-lo acesse esse o conteúdo que fizemos sobre isso. Após seguir os passos para registro acesse o desafio proposto e então clique em TRAIN , você então será redirecionado para a página onde o desafio deve ser feito. Quando tiver finalizado o exercício clique em TEST para verificar, com testes simples, se sua solução satisfaz o que foi pedido. Passando nesses testes clique em ATTEMPT , ao fazer isso seu código passará por todos os testes existentes para validação da solução. Caso sua solução esteja correta o botão SUBMIT ficará disponível, clique nele para submeter sua resposta, caso contrário volte ao seu código e veja o que ainda não está satisfazendo o que se é pedido, repita esse processo até que sua solução esteja correta.

  Desafio - 16 + 8 = 214 ;

  Esse desafio irá exigir um pouco de conhecimento sobre alguns métodos do JavaScript, para isso pesquise quando for necessário e caso surja alguma dúvida peça ajuda no Slack . Dúvidas em como fazer uma boa pesquisa? Sem problemas! Acesse esse conteúdo sobre como pesquisar como uma pessoa desenvolvedora .

*/

function add(num1, num2) {
  //Convert numbers to string in order to ease the ammount of digits and manipulations
  let str1 = num1.toString();
  let str2 = num2.toString();
  //Used to determine which of the numbers will go at the upper space when writing the sum operation
  if (str1.length !== str2.length) {
  /* The abstract used in this solving requires that the numbers has the same length in order to sweep
    among the elements beginning in the right to the left */
    let strArray;
    if (str1.length > str2.length) {
      //Unshifting 0s lefts to the array won't change its number value
      strArray = str2.split('');
      while (strArray.length < str1.length) {
        strArray.unshift('0');
      }
      str2 = strArray.join('');
    } else {
      strArray = str1.split('');
      while (strArray.length < str2.length) {
        strArray.unshift('0');
      }
      str1 = strArray.join('');
    }
  }
  // Checking which of the strings will go at the upper space whem writing the sum operation
  /* The chosen is the one which the first element is not 0.
    If the strings have equal lengths since the input, the inputing order is what matters */
    let upperStr;
    let underStr;
    if (str1[0] === '0') {
    upperStr = str2;
    underStr = str1;
  } else {
    upperStr = str1;
    underStr = str2;
  }
  let resultString = [];
  /* Sweeping the upper string and summing the values allocated in each index with the corresponding item
    in the under string.
    The total is stored in the corresponding result string index */
  for (let index = upperStr.length - 1; index >= 0; index -= 1) {
    resultString[index] = Number(upperStr[index]) + Number(underStr[index]);
  }
  // Converts the string back to integer at the returning point
  return Number(resultString.join(''));
}

let a = 1236;
let b = 30977;
console.log(`${a} + ${b} = ${add(a , b)}`);
