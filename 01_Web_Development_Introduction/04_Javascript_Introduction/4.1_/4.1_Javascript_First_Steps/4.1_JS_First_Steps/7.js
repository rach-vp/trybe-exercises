/*

Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

Porcentagem >= 90 -< A
Porcentagem >= 80 -< B
Porcentagem >= 70 -< C
Porcentagem >= 60 -< D
Porcentagem >= 50 -< E
Porcentagem < 50 -< F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

*/

let nota = 50;

// Perguntar no plantão sobre o switch
switch (nota) {
    case (nota < 50 && nota >= 0):
        console.log('De a acordo com a sua nota (' + nota + ' pontos), você é conceito F.');
        break;
    case (nota < 60 && nota >= 50):
        console.log('De a acordo com a sua nota (' + nota + ' pontos), você é conceito E.');
        break;
    case (nota < 70 && nota >= 60):
        console.log('De a acordo com a sua nota (' + nota + ' pontos), você é conceito D.');
        break;
    case (nota < 80 && nota >= 70):
        console.log('De a acordo com a sua nota (' + nota + ' pontos), você é conceito C.');
        break;
    case (nota < 90 && nota >= 80):
        console.log('De a acordo com a sua nota (' + nota + ' pontos), você é conceito B.');
        break;
    case (nota < 100 && nota >= 90):
        console.log('De a acordo com a sua nota (' + nota + ' pontos), você é conceito A.');
        break;
    default:
        console.log('Nota com valor inválido.');
}

if (nota < 50 && nota >= 0){
    console.log('De a acordo com a sua nota (' + nota + ' pontos), você é conceito F.');
}
else if (nota < 60 && nota >= 50) {
    console.log('De a acordo com a sua nota (' + nota + ' pontos), você é conceito D.');
}
else if (nota < 80 && nota >= 70) {
    console.log('De a acordo com a sua nota (' + nota + ' pontos), você é conceito C.');
}
else if (nota < 90 && nota >= 80) {
    console.log('De a acordo com a sua nota (' + nota + ' pontos), você é conceito B.');
}       
else if (nota < 100 && nota >= 90){
    console.log('De a acordo com a sua nota (' + nota + ' pontos), você é conceito A.');
}
else {
    console.log('Nota com valor inválido.');
}       
