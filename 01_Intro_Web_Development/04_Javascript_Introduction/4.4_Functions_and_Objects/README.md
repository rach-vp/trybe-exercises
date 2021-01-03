# Resolução de exercícios sobre o conteúdo do bloco 4.4 - Objetos e Funções

### Conteúdos

#### Objetos

  Então, pessoal, como vocês viram, objetos também são variáveis, porém eles podem organizar estruturas mais complexas.

  let car = {
    type: "Fiat",
    model: "500",
    color: "white",
  };

  Agora vamos fazer alguns exercícios de fixação para consolidarmos os conhecimentos adquiridos no video anterior! 😉

  Crie um objeto player contendo as variáveis listadas abaixo.

  let name = 'Marta';
  let lastName = 'Silva';
  let age = 34;
  let medals = { golden: 2, silver: 3 };

  Acesse a chave name , lastName e age . Concatene as informações para fazer um console.log no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

  Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

  let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

  Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

  Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medelhas de prata".
  Agora veremos uma variação do laço for , que nos garante facilidade ao lidar com objetos.

#### Funções

Que tal praticar um pouco?

Pegue cada um dos exercícios da primeira parte das nossas aulas de JavaScript e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções. Por exemplo:

O programa...

// Adição
let a = 5;
let b = 2;

a + b;
... se transforma em:

function sum(a, b) {
  return a + b;
}

### Exercícios

#### Parte I - Objetos e For/In

  Usando o objeto abaixo, faça os exercícios a seguir:
  
  let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
  
  1- Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
  
    Valor esperado no console: Bem-vinda, Margarida
  
  2- Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.
  
    Valor esperado no console:
  
      {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorrente: 'Sim'
      };
  
  3- Faça um for/in que mostre todas as chaves do objeto.
  
    Valor esperado no console:
  
      personagem
      origem
      nota
      recorrente
  
  4- Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
  
    Valor esperado no console:
  
      Margarida
      Pato Donald
      Namorada do personagem principal nos quadrinhos do Pato Donald
      Sim
  
  5- Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
    
    Valor esperado no console:
    
      Margarida e Tio Patinhas
      Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
      Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
      Ambos recorrentes // Atenção para essa última linha!

#### Parte II - Funções

  Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas deixam o código mais bem escrito.
  
  1- Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
    
    Exemplo de palíndromo: arara .
    verificaPalindrome("arara") ;
    Retorno esperado: true
    verificaPalindrome("desenvolvimento") ;
    Retorno esperado: false
  
  2- Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
  
    Array de teste: [2, 3, 6, 7, 10, 1]; .
    Valor esperado no retorno da função: 4 .
  
  3- Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
    
    Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
    Valor esperado no retorno da função: 6 .
  
  4- Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
  
    Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
    Valor esperado no retorno da função: Fernanda .
  
  5- Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
    Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
    Valor esperado no retorno da função: 2 .
  
  6- Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
    
    Valor de teste: N = 5 .
    Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
  
  7- Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
    
    Valor de teste: "trybe" e "be"
    Valor esperado no retorno da função: true
    verificaFimPalavra("trybe", "be") ;
    Retorno esperado: true
    verificaFimPalavra("joaofernando", "fernan") ;
    Retorno esperado: false

#### Bônus

  1-(Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
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
  
  2- Para o próximo exercício você irá precisar ter uma conta no CodeWars , para entender como fazê-lo acesse esse o conteúdo que fizemos sobre isso. Após seguir os passos para registro acesse o desafio proposto e então clique em TRAIN , você então será redirecionado para a página onde o desafio deve ser feito. Quando tiver finalizado o exercício clique em TEST para verificar, com testes simples, se sua solução satisfaz o que foi pedido. Passando nesses testes clique em ATTEMPT , ao fazer isso seu código passará por todos os testes existentes para validação da solução. Caso sua solução esteja correta o botão SUBMIT ficará disponível, clique nele para submeter sua resposta, caso contrário volte ao seu código e veja o que ainda não está satisfazendo o que se é pedido, repita esse processo até que sua solução esteja correta.
    
    Desafio - 16 + 8 = 214 ;
    Esse desafio irá exigir um pouco de conhecimento sobre alguns métodos do JavaScript, para isso pesquise quando for necessário e caso surja alguma dúvida peça ajuda no Slack . Dúvidas em como fazer uma boa pesquisa? Sem problemas! Acesse esse conteúdo sobre como pesquisar como uma pessoa desenvolvedora .