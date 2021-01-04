# 4.1 - First Steps on JavaScript

## Contents

### Part 2

1. Create a constant named ```name``` and attribute your name to it
2. Create a constant named ``birthCity`` and attribute your birth city name to it
3. Create a variable named ``birthYear`` and attribute your birth year to it
4. Use ``console.log()`` to print the constants and variable that you created
5. Change the value attributed to the variable ``birthYear`` to 2020. Run ``console.log(birthYear)`` again to see what happens!
6. Change the value attributed to the constant ``birthCity``. Run ``console.log(birthYear)``! Would you know why we receive an error message?

### Part 3

1. Create a variable named ``base`` and a variable named ``height`` and attribute its values: 5 e 8
2. Create a variable named ``area`` and attribute to it the result of the multiplication of base and height.
3. Create a variable named ``perimeter`` and attribute to it the result of the sum of all sides of the rectangle.

### Part 4

1. Create a variable that receives a candidate's grade in a technical challenge (its value must be among 1 and 100)
2. Implement a logic that checks if the candidate was approved, failed or is in the waiting list. For this, consider the subsequent information:
    - Grade greater then 80, prints "Parabéns! Você foi aprovado!"
    - Grade lower than 80 and greater than 60, prints "Você está na lista de espera"
    - Grade lower then 60, prints "Você foi reprovado"
3. Create a conditional structure using ``if``, ``else if`` and ``else`` to develop your algorithm and all the logic operators that apply in each case
4. Change the value of the grade to check if the conditionals work

### Part 5

1. Create a variable to store the candidate status in a selective process that may be: ``Aprovado``, ``Lista`` ou ``Reprovado``
2. Create a conditional structure using ``switch/case`` that prints messages of the previous exercise about the candidate status. As a default, print ``Não se aplica``

## Exercises

In today’s exercises, you are going to develop 15 little programs. All of the exercises the programming logic, arithmetic operators and logical operators. In order to execute your codes, we recommend that you use the VS Code Extension.

1. Create 5 programs, one for each basic math operation. Your program must have 2 variables, ``a`` e ``b``, defined at the beginning with the values to be operated. Do programs for:
    - Adition
    - Subtraction
    - Multiplication
    - Division
    - Module
2. Create a program that returns the greater of two numbers. Define the values to be compared at the beginning of the program.
3. Create a program that returns the greater of three numbers. Define the values to be compared at the beginning of the program.
4. Create a program which, given a defined value of a variable, returns ``positive`` if the number is positive, ``negative`` if it is negative and ``zero`` if neither.
5. Create a program that defines three variables with the values of the internal three angles of a triangle. It returns ``true`` if the angles are from a real triangle and ``false`` if not.
    - The sum must be equal to 180 degrees in order to be a valid triangle. If it is not, an error message must be returned.
6. Write a program that receives the name of a chess piece and returns the move that it does.
    - As a challenge, make the program work either if it receives the name in lower case or upper case, without adding any conditionals.
    - If an invalid name is received, the program must return an error message
7. Write a program that converts a grade into a percentage in concepts from A to F. Follow these rules:
    - % >= 90: A
    - % >= 80: B
    - % >= 70: C
    - % >= 60: D
    - % >= 50: E
    - % < 50: F
    - It must return an error message and shut down if the grade received is lower than 0 or greater than 100
8. Write a program that defines three numbers at the beginning and returns ``true`` if at least one is an even number. Otherwise, if returns ``false``
    - **Bonus:** Do it with one conditional
9. Write a program that defines three numbers at the beginning and returns ``true`` if at least one is an odd number. Otherwise, if returns ``false``
    - **Bonus:** Do it with one conditional
10. Write a program that initiates with two values in two different variables: the cost of a product and its sale value. Starting with the values, calculate how much of profit (sale value minus the product cost) the business is going to have to sell 1000 of these.
    - Note that, over the product cost, 20% of taxes are charged
    - The program must return an error message and shut down if some value is lower than zero
    - Profit is the result of the subtraction among the sale value and the product cost, reminding the 20% of taxes must be included in the cost
11. A person who is a CLT worker in Brazil has taxes called INSS and IR discounted from her raw salary. Create a program which, given a raw salary, calculates the liquid to be received.
