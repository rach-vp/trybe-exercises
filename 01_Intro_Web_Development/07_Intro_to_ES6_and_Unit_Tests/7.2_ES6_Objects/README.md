# 7.2 - ES6: Objects

## Part I

For the exercises, use the code below:

```javascript
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.

}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);
```

Now you're are going to do some fixation exercises.

1. Complete the function ``customerInfo()`` in  order to its return to be equal to "Hello Ana Silveira, deliver to: Rafael Andrade, contact: 11-98763-1416, Rua das Flores, Nº: 389, AP: 701"

2. Complete the function ``orderModifier()`` in order to its return to be equal to "Hello, Luiz Silva. The total of your order margherita, pepperoni e Coca-Cola Zero is $50.00."

    - Modify the buyer's name
    - Modify the total to $50.00

## Part II

For the exercises, use the code below:

```javascript
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
```

1. Create a function that adds the morning(manhã) shift in ``lesson2``. This function must receive three parameters: the object to be modified, the key to be added and its value.
2. Create a function to list the keys in an object. It must receive an object as an argument.
3. Create a function that shows the object size.
4. Crete a function to list the values in an object. It must receive an object as an argument.
5. Create an object named ``allLesson``, that groups all classes through ``Object.assign``. Each key of this new object will be a class, this keys being ``lesson1``, ``lesson2`` and ``lesson3``. Executing the command ``consolge.log(allLessons)``, the output must be:

    ```javascript
    console.log(allLessons);
    /*
    {
      lesson1:
      { materia: 'Matemática',
        numeroEstudantes: 20,
        professor: 'Maria Clara',
        turno: 'manhã' },
      lesson2:
      { materia: 'História',
        numeroEstudantes: 20,
        professor: 'Carlos',
        turno: 'noite' },
      lesson3:
      { materia: 'Matemática',
        numeroEstudantes: 10,
        professor: 'Maria Clara',
        turno: 'noite' }
    };
    */
    ```

6. Using the object created in exercise 5, create a function that returns the total of students in all classes.
7. Create a function that obtains the value of the key according to its position in the object.
8. Create a function that checks if the pair key-value exists in the object. It must receive three arguments: the object, the name of the key and the key's value.

## Bonus

1. Create a function that counts how many students attended Math classes. Use the object created in exercise 5.
2. Create a function that returns an object that represents the report of the teacher, classes ministered and the number of students. Use the object created in exercise 5.

    ```javascript
    console.log(createReport(allLessons, 'Maria Clara'))
    /* {
      professor: 'Maria Clara',
      aulas: [ 'Matemática', 'Matemática' ],
      estudantes: 30
    } */
    ```
