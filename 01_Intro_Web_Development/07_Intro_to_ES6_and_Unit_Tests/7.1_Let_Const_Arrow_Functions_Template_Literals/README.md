# 7.1 - Let, const, arrow functions and Template strings

## Part I

Now, you are going to do some fixation exercises.

1. Make modifications in the function in order to its behaviour respects the scope where each variable was declared.

    - Modify the structure of the function so it becomes an ``arrow function``
    - Modify the concatenations to ``template literals``
    - Copy the code below:

      ```javascript
            function testingScope(escopo) {
            if (escopo === true) {
              var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
              ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
              console.log(ifScope);
            } else {
              var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
              console.log(elseScope);
            }
            console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
          }

          testingScope(true);
      ```

2. Copy the code below and create a function that returns the array ``oddsAnsEvens`` in ascending order.

    - Use ``template literals`` in order to the call ``console.log(oddsAnsEvens)`` returns "The numbers 2, 3, 4, 7, 10, 13 are ordered in ascending order."

  ```javascript
        const oddsAndEvens = [13, 3, 4, 10, 7, 2];

      // Seu código aqui.

      console.log(oddsAndEvens);
  ```

## Part II

Down here, you are going to see some specifications of algorithms for you to develop. It is fundamental that you use what you've learned about ``let``, ``const``, ``arrow functions`` and ``template strings``.

1. Create a function that receives a number and return its factorial.

    - **Bonus:** try making it recursively (is possible to do it in a single line).

2. Create a function that receives a phrase and returns which is the greatest word in it. Exemple:

    ```javascript
          longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
    ```

3. Create a page that contains:

    - A button to which will be associated with an event listener.
    - A variable that counts the number of clicks in the button.
    - A HTML field that refreshes the number of clicks as the click count is updated.

4. Create a Javascript code with the following specifications:

    - _Function 1:_ Write a function that receives a string as a parameter. Its job is to search for the letter ``x`` in any phrase that you determine and replace it by the string that you passed as a parameter. The function must return this new phrase.

      **Example:**

        - Phrase: "Tryber x here!"
        - Parameter: "xablau"
        - Return: "Tryber xablau here!"

    - An array in the global scope must be created containing 5 strings describing your main skills.
    - _Function 2:_ Write a function that receives the string returned by the _Function 1_ as a parameter. This function must concatenate the string from the global array to the string passed as a parameter to the _Function 2_. The skills must be alphabetically ordered. The function must return this new string:

      **Example:**

        ```text
        Trybe x here! My five main skills are:
            - JavaScript
            - etc
        ```
