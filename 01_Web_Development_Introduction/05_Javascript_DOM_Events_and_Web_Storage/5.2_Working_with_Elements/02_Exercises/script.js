/*

O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazê-los utilizando apenas código JavaScript, o qual deve ser inserido entre as tags <script> e </script>.

Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:

Raquel note: Estou fazendo em um arquivo separado para melhorar minha visualização na hora de resolver. Uso a janela do VS Code dividia em dois, assim posso navegar pelo <head> do HTML sem perder a linha do scrpit em que estou trabalhando.

*/

//PARTE I - ADICIONANDO OS ELEMENTOS

// 1- Adicione a tag h1 com o texto 'Exercício 5.2 - JavaScript DOM' como filho da tag body;

const header1 = document.createElement('h1');
header1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(header1);

// 2- Adicione a tag div com a classe main-content como filho da tag body ;

const newDiv = document.createElement('div');
newDiv.className = 'main-content';
document.body.appendChild(newDiv);

// 3- Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;

const newChildDiv = document.createElement('div');
newChildDiv.className = 'center-content';
newDiv.appendChild(newChildDiv);

// 4- Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;

const newParagraph = document.createElement('p');
newParagraph.innerText = 'Aprendendo a criar elementos e adicionar eles ao HTML.';
newChildDiv.appendChild(newParagraph);

// 5- Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;

const leftAsideDiv = document.createElement('div');
leftAsideDiv.className = 'left-content';
newDiv.appendChild(leftAsideDiv);

// 6- Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;

const rightAsideDiv = document.createElement('div');
rightAsideDiv.className = 'right-content';
newDiv.appendChild(rightAsideDiv);

// 7- Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;

const imgLeftAsideDiv = document.createElement('img');
imgLeftAsideDiv.className = 'small-image';
imgLeftAsideDiv.src = 'https://picsum.photos/200';
leftAsideDiv.appendChild(imgLeftAsideDiv);

// 8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;

const newNonOrderedList = document.createElement('ul');
rightAsideDiv.appendChild(newNonOrderedList);

for (let index = 1; index <= 10; index += 1) {
  const ulItems = document.createElement('li');
  ulItems.innerText = index;
  newNonOrderedList.appendChild(ulItems);
}

// 9- Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.

for (let index = 1; index <= 3; index += 1) {
  const newH3 = document.createElement('h3');
  newH3.innerText = `<h3> número ${index}`;
  newDiv.appendChild(newH3);
}

// PARTE II - Alterações diversas

// 1- Adicione a classe title na tag h1 criada;

const title = document.getElementsByTagName('h1')[0];
title.className = 'title';

// 2- Adicione a classe description nas 3 tags h3 criadas;

const addDescription = document.getElementsByTagName('h3');
for (let index = 0; index < addDescription.length; index += 1) {
  addDescription[index].className = 'description';
}

// 3- Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;

const leftDiv = document.getElementsByClassName('left-content')[0];
newDiv.removeChild(leftDiv);

