# 10.1 - Jest First Steps

## Part I

1. Redo the exercises from 1 to 5 from 7.3 - Unit Tests

## Part II

At bloc 4 you developed a project to test your knowledge of JavaScript and programming logic? Playground Functions. In the following exercises, you are going to test some functions you created! Take the opportunity to refactor your code and use _Higher Order Functions_ and other features of ES6.

1. For the functions ``encode`` and ``decode`` create the following tests:

    - Test if ``encode``and ``decode`` are functions.
    - For function ``encode`` test if the vowels **a, e, i, o, u** are converted to **1, 2, 3, 4, 5**, respectively.
    - For function ``decode`` test if the vowels **1, 2, 3, 4, 5** are converted to **a, e, i, o, u**, respectively.
    - Test if other letters/numbers are not converted.
    - Test if the string returned by the functions has the same length as the inputed string.

2. The function ``techList`` receives as arguments an array containing a list of technologies  and string with a name. For each technology  in the array, the function creates, alphabetically ordered, an object with the following properties:

    ```javascript
    {
      tech: 'techName',
      name: name,
    }
    ```

    Implement the function ``techList`` starting from the following tests:

    ```javascript
    describe('Testa a função techList', () => {
      it('Testa se a função techList é definida', () => {
        expect(techList).toBeDefined();
      });
      it('Testa se techList é uma função', () => {
        expect(typeof techList).toBe('function');
      });
      it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
        expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
          {
            tech: 'CSS',
            name: 'Lucas'
          },
          {
            tech: 'HTML',
            name: 'Lucas'
          },
          {
            tech: 'JavaScript',
            name: 'Lucas'
          },
          {
            tech: 'Jest',
            name: 'Lucas'
          },
          {
            tech: 'React',
            name: 'Lucas'
          }
        ]);
      });
      it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
        expect(techList([], 'Lucas')).toBe('Vazio!');
      });
    });
    ```

3. The function ``hydrate`` receives a string in the format "amount drink" and returns a tip for the number of water glasses you should drink to keep hydrated. For each drink, you shall drink 1 glass of water to avoid a hangover. Implement the function ``hydrate`` starting from the tests below.

    ```javascript
    const hydrate = require('./hydrate.js');

    describe('Testa a função hydrate', () => {
      it('Testa se a função hydrate é definida', () => {
        expect(hydrate).toBeDefined();
      });
      it('Testa se hydrate é uma função', () => {
        expect(typeof hydrate).toBe('function');
      });
      it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
        expect(hydrate('1 cerveja')).toBe('1 copo de água');
        expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
        expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
        expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
        expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
      });
    });
    ```

## Bonus

1. Consider the data below. You must create a function that receives two arguments: the ``id`` of the employee and the info about her (``firstName``, ``lastName``, ``specialities``). You must create the tests for this function. The function must return the result of the search for the ``id`` and the info consulted. In case of unknown ``id`` the return must be ``ID not identified``. If the info required don't exist the return must be ``Unavailable information``.

    ```javascript
    // Dados
    const professionalBoard = [
      {
        id: '8579-6',
        firstName: 'Ana',
        lastName: 'Gates',
        specialities: ['UX', 'Design'],
      },
      {
        id: '5569-4',
        firstName: 'George',
        lastName: 'Jobs',
        specialities: ['Frontend', 'Redux', 'React', 'CSS'],
      },
      {
        id: '4456-4',
        firstName: 'Leila',
        lastName: 'Zuckerberg',
        specialities: ['Context API', 'RTL', 'Bootstrap'],
      },
      {
        id: '1256-4',
        firstName: 'Linda',
        lastName: 'Bezos',
        specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
      },
      {
        id: '9852-2-2',
        firstName: 'Jeff',
        lastName: 'Cook',
        specialities: ['Ruby', 'SQL'],
      },
      {
        id: '4678-2',
        firstName: 'Paul',
        lastName: 'Dodds',
        specialities: ['Backend'],
      },
    ];

    // Pesquisa
    const searchEmployee = (id, detail) => {
      // Implemente seu código aqui
    };
    ```
