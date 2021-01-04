# 4.4 - Functions and objects

## Contents

### Objects

So, guys, you’ve seen that objects are also variables however, they can organize more complex structures. Now we are going to do some fixation exercises to consolidate the knowledge acquired previously! 😉

1. Create an object ``player`` containing the variables below

   ```javascript
   let name = 'Marta';
   let lastName = 'Silva';
   let age = 34;
   let medals = { golden: 2, silver: 3 };
   ```

2. Access the key ``name``, ``lastName`` and ``age``. Concatenate the information to run ``console.log()`` in the following format: “A jogadora Marta Silva tem 34 anos de idade”
3. Add to the object the key ``bestInTheWorld`` e attribute to it an array containing the dates in which the player Marta was considered the best in the world.

   ```javascript
   let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
   ```

4. Access the key ``bestInTheWorld`` and run ``console.log()`` in the following format: “A jogadora Marta Silva foi eleita a melhor jogadora do mundo por 6 vezes”
5. Access the key medals and run ``console.log()`` in the following format: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”

### Fuctions

What about practising a little?
Get each one of the exercises from the day 4.2 and make the all to be functions from the same file. The variables defined at the beginning of the program must be converted into function parameters.

## Exercises

### Part I - Objects anf For/in

Using the object below, do the exercises:

 ```javascript
 let info = {
   personagem: "Margarida",
   origem: "Pato Donald",
   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
 };
 ```

1. Print a console welcoming message for the character above, including its name:

   ```text
   Bem vinda, Margarida
   ```

2. Insert in the object the key named ``recorrente`` and its value ``Sim``, then print the object on the console. Expected value:

   ```javascript
   {
   personagem: 'Margarida',
   origem: 'Pato Donald',
   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
   recorrente: 'Sim'
   };
   ```

3. Run a ``for/in`` that shows all the object keys. Expected value:

   ```text
   personagem
   origem
   nota
   recorrente
   ```

4. Run a ``for/in`` that shows all the object values. Expected value:

   ```text
   personagem
   origem
   nota
   recorrente
   ```

5. Define a second object wih the same structure of the first one and the following values: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim". Print both on colse like the example below:

   ```text
   Margarida e Tio Patinhas
   Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
   Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
   Ambos recorrentes // Atenção para essa última linha!
   ```

### Part II - Functions

1. Create a function that receives a string and returns ``true`` if it's a palindrome, or else returns ``false``
2. Create a function that receives an array of integers and returns the index of the greatest value
3. Create a function that receives an array of integers and returns the index of the lowest value
4. Create a function that receives an array of names and returns the one with the greatest amount of characters
5. Create a function that receives an array of integers and returns the most repeated
6. Create a function that receives an integer ``n`` and returns the sum of all values from 1 to ``n``
7. Create a function that receives a ``string word`` and a ``string ending``. Check if ``string ending`` is really the ending of ``string word``. Consider that ``string ending`` will always be smaller than ``string word``

### Part III - Bonus

1. (Hard) Create a function that receives a string in roman algorisms and returns the Arabic number that the string represents.
2. [Dum Sum](https://www.codewars.com/kata/5effa412233ac3002a9e471d/javascript)
