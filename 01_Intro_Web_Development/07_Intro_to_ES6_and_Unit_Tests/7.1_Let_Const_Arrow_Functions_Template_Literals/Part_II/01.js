const number = Math.round(Math.random()*10);

const factorial = n => {
  let factorial = 1;
  for (let index = 2; index <= n; index += 1) {
    factorial *= index;
  }
  return factorial;
}

console.log(`The result of ${number}! is ${factorial(number)}`);
