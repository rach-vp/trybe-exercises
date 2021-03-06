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
    if (holidayDays[index].style.backgroundColor !== 'rgb(240, 255, 255)') {
      holidayDays[index].style.backgroundColor = 'rgb(240, 255, 255)';
    } else {
      holidayDays[index].style.backgroundColor = 'rgb(238, 238, 238)';
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
    auxArray.push(fridayDays[index].innerText);
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
fridayButton.addEventListener('click', function () {
  sextou(auxArray, fridayDays);
});


// Exercício 6

function highlightDays() {
  const days = document.querySelectorAll('.day');
  for (let index = 0; index < days.length; index += 1) {
    days[index].addEventListener('mouseenter', function(event) {
      event.target.style.fontSize = '50px';
      event.target.style.fontWeight = '600';
    });
    days[index].addEventListener('mouseleave', function(event) {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = 'normal';
    });
  }
}

highlightDays();

// Exercício 7

function newTask(taskName) {
  const taskList = document.querySelector('.my-tasks');
  const task = document.createElement('span');
  task.innerText = taskName;
  taskList.appendChild(task);
}

newTask('Início hackathon Ambev - 11/12');

// Exercício 8

function taskColor(color) {
  const taskList = document.querySelector('.my-tasks');
  const taskColor = document.createElement('div');
  taskColor.className = 'task';
  taskColor.style.backgroundColor = color;
  taskList.appendChild(taskColor);
}

taskColor('rgb(65,105,225)');

// Adicionando quebra de linha aos itens da lista

function taskListLineBreak() {
  const taskList = document.querySelector('.my-tasks');
  const taskSpan = document.querySelectorAll('.my-tasks span');
  const taskDiv = document.querySelectorAll('.my-tasks div');
  const newListItem = document.createElement('li');
  newListItem.appendChild(taskSpan[taskSpan.length - 1]);
  newListItem.appendChild(taskDiv[taskDiv.length - 1]);
  newListItem.style.lineHeight = '50px';
  taskList.appendChild(newListItem);
}

taskListLineBreak();

// Exercício 9

function refreshTaskList() {
  const tasks = document.querySelectorAll('.task');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].addEventListener('click', function() {
      if (tasks[index].className !== 'task selected') {
        tasks[index].className = 'task selected';
        console.log('Task successfully selected!');
      } else {
        tasks[index].className = 'task';
        console.log('Task successfully deselected!');
      }
    });
  }
}

refreshTaskList();

// Exercício 10
function resetColorCheck(target) {
  if (target.style.color === '') {
    return;
  } else if (target.style.color !== 'rgb(119 , 119 , 119)') {
    target.style.color = 'rgb(119 , 119 , 119)';
    console.log('Color reseted.');
  }
}

function checkTaskStatus(selectedTask) {
  let passed = true;
  if (selectedTask === undefined) {
    passed = false;
  }
  return passed;
}

function changecolor(target, selectedTask) {
  target.style.color = selectedTask.style.backgroundColor;
  selectedTask.className = 'task';
  console.log('Color successfully changed.');
}

function paintDayWithTaskColor() {
  const days = document.querySelectorAll('.day');
  for (let index = 0; index < days.length; index += 1) {
    days[index].addEventListener('click', function(event) {
      const selectedTaskColor = document.getElementsByClassName('task selected')[0]; //OK
      resetColorCheck(event.target);
      if (checkTaskStatus(selectedTaskColor)) {
        changecolor(event.target, selectedTaskColor);
      } else {
        console.log('No tasks selected.');
      }
    });
  }
}

paintDayWithTaskColor()

// Bônus

function transferText() {
  const taskText = document.querySelector('#task-input').value;
  if (taskText.length > 0) {
    newTask(taskText);
    taskColor('red');
    taskListLineBreak();
    refreshTaskList();
  } else {
    alert('Campo em branco!')
  }
}

const addTaskButton = document.querySelector('#btn-add');
const inputBox = document.querySelector('#task-input');
addTaskButton.addEventListener('click', transferText);
inputBox.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    transferText();
  }
});
