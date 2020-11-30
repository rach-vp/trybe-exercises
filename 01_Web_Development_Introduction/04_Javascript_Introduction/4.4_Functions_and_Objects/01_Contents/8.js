/*

Escreva um programa que converte uma grade dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

Porcentagem >= 90 -< A
Porcentagem >= 80 -< B
Porcentagem >= 70 -< C
Porcentagem >= 60 -< D
Porcentagem >= 50 -< E
Porcentagem < 50 -< F

O programa deve retornar uma mensagem de erro e encerrar se a grade passada for menor que 0 ou maior que 100.

*/

let grade = 50;
concept(grade);

function concept(grade) {
    if (grade < 50 && grade >= 0){
        console.log('De a acordo com a sua grade (' + grade + ' pontos), você é conceito F.');
    } else if (grade < 60 && grade >= 50) {
        console.log('De a acordo com a sua grade (' + grade + ' pontos), você é conceito D.');
    } else if (grade < 80 && grade >= 70) {
        console.log('De a acordo com a sua grade (' + grade + ' pontos), você é conceito C.');
    } else if (grade < 90 && grade >= 80) {
        console.log('De a acordo com a sua grade (' + grade + ' pontos), você é conceito B.');
    } else if (grade < 100 && grade >= 90){
        console.log('De a acordo com a sua grade (' + grade + ' pontos), você é conceito A.');
    } else {
        console.log('grade com valor inválido.');
    }
}       
