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
  console.log(`Hello, ${order.order.delivery.deliveryPerson}. Deliver for: ${order.name}, contact: ${order.phoneNumber}, address: ${order.address.street}, n ${order.address.number}, Ap: ${order.address.apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Modify the buyer's name
  order.name = 'Luiz Silva';
  // Modify the total
  order.payment.total = 50

  console.log(`Hello, ${order.name}. The total of your order ${Object.keys(order.order.pizza)} and ${order.order.drinks.coke.type} is ${order.payment.total}`);
}

orderModifier(order);
