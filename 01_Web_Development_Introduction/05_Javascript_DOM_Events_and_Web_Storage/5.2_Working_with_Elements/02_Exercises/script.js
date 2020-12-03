/*

O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazê-los utilizando apenas código JavaScript, o qual deve ser inserido entre as tags <script> e </script>.

Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:

Raquel note: Estou fazendo em um arquivo separado para melhorar minha visualização na hora de resolver. Uso a janela do VS Code dividia em dois, assim posso navegar pelo <head> do HTML sem perder a linha do scrpit em que estou trabalhando.

*/

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