function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1
function checkDayByClass(dayValue) {

}

function organizeDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const days = document.querySelector('#days');
  const weekDays = document.querySelectorAll('.week-days li');

  //Nem todos os meses tem o mesmo número de semanas, então melhor escolher um laço com fim indefinido para "travar" a linha da semana onde os dias estão sendo adicionados 
  let weekOfTheMonth = 1;
  let dayIndex = 0;
  while (dayIndex < dezDaysList.length) {
    // Semanas têm tamanho pré definido então pode-se usar um laço for para fazer a adiçao dos dias da semana corrente
    for (let dayOfTheWeekIndex = 0; dayOfTheWeekIndex < weekDays.length; dayOfTheWeekIndex += 1) {
      if (dayIndex >= dezDaysList.length) {
        break;
      } else {
        const dayOfTheMonth = dezDaysList[dayIndex];
        const newDayListElement = document.createElement('li');
        newDayListElement.innerText = dayOfTheMonth;
        newDayListElement.className = 'day';
        days.appendChild(newDayListElement);
        // checkDayByClass();
        dayIndex += 1;
      }
    }
    weekOfTheMonth += 1;
  }
}

organizeDaysOfTheMonth();
