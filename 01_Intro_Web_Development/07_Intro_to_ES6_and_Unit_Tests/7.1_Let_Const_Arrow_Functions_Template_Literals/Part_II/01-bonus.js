const number = Math.round(Math.random()*10);

const factorial = n => n >= 1 ? n * factorial(n - 1) : 1;

console.log(`The result of ${number}! is ${factorial(number)}`);
