# 5.3 - Events

## Tryber Calendar

Before beginning, create a HTML file in your directory and copy and paste the code below:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Calendar</title>
  </head>
  <body>
    <header class="month-container">
      <ul>
        <li id="month">Dezembro</li>
        <li id="year">2020</li>
      </ul>
    </header>
    <div class="week-days-container">
      <ul class="week-days">
      </ul>
    </div>
    <div class="days-container">
      <ul id="days">
      </ul>
    </div>
    <div class="buttons-container">
    </div>
    <section class="tasks-container">
      <div class="my-tasks">
        <h3>MINHAS TAREFAS</h3>
      </div>
      <div class="input-container">
        <h3>COMPROMISSOS</h3>
        <label for="task-input">Novo:</label>
        <input type="text"
          id="task-input"
          placeholder="Escreva seu compromisso"
        >
        <button id="btn-add">Adicionar</button>
      </div>
      <div class="task-list-container">
        <ul class="task-list">
        </ul>
      </div>
    </section>
    <script src="script.js"></script>
  </body>
</html>
```

Create also a CSS file and copy and paste the code below to style the page. Feel comfortable the free your creativity and change the file as you wish!

```css

* {
  margin: 0;
}

body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #eee;
}

button {
  margin: 20px;
}

#btn-add {
  margin: 0;
}

.buttons-container {
  background-color: #eee;
  display: inline-block;
  text-align: center;
  width: 100%;
}

#days {
  margin: 0;
}

#days li {
  color: #777;
  display: inline-block;
  font-size:20px;
  margin: 5px 0;
  text-align: center;
  vertical-align: middle;
  width: 13.6%;
}

.input-container {
  width: 49%;
  height: 100px;
  display: inline-block;
}

input {
  margin-top: 8px;
}

label {
  color: #666;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  vertical-align: middle;
}

.month-container {
  background: green;
  padding: 40px 25px;
  text-align: center;
}

.month-container ul li {
  color:white;
  font-size: 20px;
  letter-spacing: 3px;
  list-style-type: none;
  text-transform: uppercase;
}

.my-tasks {
  clear: both;
  float: left;
  height: 100px;
  vertical-align: middle;
  width: 49%;
}

.my-tasks div {
  border: 1px solid black;
  border-radius: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: inline-block;
  height: 35px;
  margin-left: 10px;
  vertical-align: middle;
  width: 35px;
}

.my-tasks div:hover {
  height: 45px;
  width: 45px;
}

.my-tasks span {
  color: #666;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 3px;
  padding-bottom: 10px;
  vertical-align: middle;
}

.tasks-container {
  height: 130px;
  justify-content: center;
  text-align: center;
  width: 100%;
}

.tasks-container h3 {
  color: #666;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  text-decoration: underline;
  letter-spacing: 3px;
}

.task-list {
  margin-top: 20px;
}

.task-list-container {
  display: inline-block;
}

.task-list-container ul {
  list-style-type: none;
  padding: 0;
  color: #666;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  vertical-align: middle;
}

.week-days-container {
  margin-left: 35px;
}

.week-days li {
  color: #666;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  width: 13.6%;
}

.week-days {
  font-size: 20px;
  margin: 0px;
  padding: 10px 0;
}
```

At last, create a JavaScript file named ``script.js`` and copy and paste the code below:

```javascript
function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
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
```

The aim of these exercises is to practice what you've just learnt about DOM, selectors, handling HTML elements and events in JS. Therefore, you must do the exercises only using JavaScript code, in which should be inserted in a ``script.js``.
For a better organization, make commits at every concluded task. Let's begin:

### Exercise 1

The array ``dazDaysLis`` contains the last two days of November and all days of December. Develop a function that dynamically creates each day on the calendar and add them as children of the ``ul`` tag IDd ``days``. Note that November 29th and 30th exist in the array because they represent respectively Sunday and Monday.

- All days must be contained in an ``li`` tag and have the class ``day``
- Days 24, 25 and 31 are holidays and, besides the class ``day``, they must have added the class ``holiday`` as well
- Days 4, 11, 18, and 25 are Friday. They must contain either the class ``day`` and class ``friday``

```javascript
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
```

### Exercise 2

Implement a function that receives as parameter the string ``Feriados`` and create dynamically a button with the name ``Feriados``

- Add to this button the ID ``btn-holiday``
- Add this button as child the ``div`` tag with the class ``buttons-container``

### Exercise 3

Implement a function that adds to the button ``Feriados`` a click event that switches the background-colour of the days class-named as ``holiday``

- It is interesting that the button also has to reverse logic too. When clicked, return to the default background-colour rgb(238, 238, 238)

### Exercise 4

Implement a function that receives the string ``Sexta-feira`` and creates a button with the name ``Sexta-feira``

- Add to this button the ID ``btn-friday``
- Add this button as child of the ``div`` tag with the class ``buttons-container``

### Exercise 5

Implement a function that adds to the button ``Sexta-feira`` a click event that modifies the inner text all days which are Friday.

- It is interesting that the button also has the reverse logic.

### Exercise 6

Implement two functions that create a zoom effect. Passing the mouse cursor over a day in the calendar should zoom it in and, mousing out, should return it to the original size

### Exercise 7

Implement a function that adds a customized task to the calendar. This function must receive as parameter a string with the name of the task (eg: "cook") and create an element with the ``span`` tag containing the task

- The created element must be added as child of the ``div`` tag with the class ``my-tasks``

### Exercise 8

Implement a function that adds a sub colour to the task created in the previous exercise. This function must receive as a parameter a string ("colour") and create dynamically an ``div`` tag with the class ``task``

- The colour parameter must be used as background-colour of the ``div`` tag
- The element must be added as child of the ``div`` tag that has the class ``my-tasks``

### Exercise 9

Implement a function that adds an event that when clicking on the ``div`` referent of the colour of your task, attribute to this element the class ``task selected``, that is, when your task has the class ``task selected`` it should be selected

- Clicking again in the element its class should return to be only ``task``, that is, the task should be unselected

### Exercise 10

Implement a function which adds an event that when clicking in a day of the calendar, attribute to its text the colour of the selected task sub.

- Clicking again in the coloured day, must return it to its default colour ``rgb(119, 119, 119)``

### Bonus

Let's add appointments to your calendar? Implement a function that, when typing an appointment in the textbox ``COMPROMISSOS``, adds the item to your list when you click on the button ``ADICIONAR``

- If the input is empty, the function must return an alert with an error message
- The event should fire pressing key ``enter``
