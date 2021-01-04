# Exercises

## Deepen your knowledge

Read carefully the question titles and do what is asked! You are going to use the array below to complete the exercises 1 to 7:

```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

1. Sweep the array printing all its values with the function ``console.log()``
2. Sum all the values in the array and print the result
3. Calculate and print the arithmetic average of the array values
4. Using the code made in the previous exercise, if the average is greater than 20, print the message ``valor maior que 20``. Else print the message ``valor menor ou igual a 20``
5. Using ``for`` loop, look up for the greatest value in the array and print it
6. Find out how many odd values exist in the array and print the result. If there's none, print the message ``nenhum valor ímpar encontrado``
7. Using ``for`` loop, find out which one is the lowest value in the array and print it
8. Using ``for`` loop, create a array that goes from 1 to 25 and print the result
9. Using the array created in the previous exercise, print the result of the division of each one of the values by 2

## Bonus

For the next two exercises [read this article](http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/) and try to figure out what is going on in the code below:

```
for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i] < array[j]) {
      let position = array[i];

      array[i] = array[j];
      array[j] = position;
    }
  }
}
```

1. Sort the array ``numbers`` in ascending order and print its values
2. Sort the array ``numbers`` in decreasing order and print its values
3. Now you are going to create a new array from the array ``numbers`` without losing it. Each value of the new array must be equal to the corresponding value of array ``numbers`` times the next one. Example: The first value of the new array must be 45 because it's the result of the multiplication of 5 (first value of ``numbers``) by 9 (second value of ``numbers``). If there is no next value, the multiplication is made by 2. Do it using ``for`` loop and ``push``. The result is the array below:

```
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
```

