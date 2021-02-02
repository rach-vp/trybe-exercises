const fetch = require('node-fetch');

const promise = new Promise((resolve, reject) => {
  const array = [];
  let sum = 0;
  for (let index = 0; index < 10; index += 1) {
    array[index] = Math.round(Math.random() * 50) ** 2;
    sum += array[index];
  }
  sum < 8000 ? resolve() : reject();
});

promise
  .then(() => console.log('Yeah! Sum is lower then 8000'))
  .catch(() => console.log('Oh no! Sum is greater then 8000'));