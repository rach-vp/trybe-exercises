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
function isHoliday(dayValue) {
  let holiday = false;
  if (dayValue === 24) {
    holiday = true;
  } else if (dayValue === 25) {
    holiday = true;
  } else if (dayValue === 31) {
    holiday = true;
  }
  return holiday;
}

function isFriday(dayOfTheWeek) {
  let friday = false;
  if (dayOfTheWeek === 5) {
    friday = true;
  }
  return friday;
}

function addSpecialClass(dayValue, dayOfTheWeek, newDayListElement) {
  if (isHoliday(dayValue)) {
    newDayListElement.className += ' holiday';
  }
  if (isFriday(dayOfTheWeek)) {
    newDayListElement.className += ' friday'
  }
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
        addSpecialClass(dezDaysList[dayIndex], dayOfTheWeekIndex, newDayListElement);
        days.appendChild(newDayListElement);
        dayIndex += 1;
      }
    }
    weekOfTheMonth += 1;
  }
}

organizeDaysOfTheMonth();

// Exercício 2

function createButton(buttonName, buttonID) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const newButton = document.createElement('button');
  newButton.id = buttonID;
  newButton.innerText = buttonName;
  buttonsContainer.appendChild(newButton);
}

createButton('Feriados', 'btn-holiday');

// Exercício 3

const holidayButton = document.querySelector('#btn-holiday');
holidayButton.addEventListener('click', function() {
  const holidayDays = document.querySelectorAll('.holiday');
  for (let index = 0; index < holidayDays.length; index += 1) {
    if (holidayDays[index].style.backgroundColor !== 'rgb(240,255,255)') {
      holidayDays[index].style.backgroundColor = 'rgb(240,255,255)';
    } else {
      holidayDays[index].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
});

// Exercício 4

// Aqui vou utilizar a mesma função criada no exercício 2

createButton('Sexta-feira', 'btn-friday');

// Exercício 5

function createAuxArray(fridayDays) {
  let auxArray = [];
  for (let index = 0; index < fridayDays.length; index += 1) {
    auxArray.push(fridayDays[index]);
  }
  return auxArray;
}

function sextou(auxArray, fridayDays) {
  for (let index = 0; index < fridayDays.length; index += 1) {
    if (fridayDays[index].innerText !== 'SEXTOU!') {
      fridayDays[index].innerText = 'SEXTOU!';
    } else {
      fridayDays[index].innerText = auxArray[index];
    }
  }
}

const fridayButton = document.querySelector('#btn-friday');
const fridayDays = document.querySelectorAll('.friday');
const auxArray = createAuxArray(fridayDays);
fridayButton.addEventListener('click', sextou(auxArray, fridayDays));

