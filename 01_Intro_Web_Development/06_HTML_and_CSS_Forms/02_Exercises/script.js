// DOM Getters
const userName = document.querySelector('#full-name');
const userEmail = document.querySelector('#user-email');
const userCPF = document.querySelector('#user-cpf');
const userAddres = document.querySelector('#user-address');
const userCity = document.querySelector('#user-city');
const userState = document.querySelector('#user-state');
const clearButton = document.querySelector('#clear-btn');
const submitButton = document.querySelector('#submit-btn');

// Event Listeners
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
});
clearButton.addEventListener('click', () => {
  const inputs = document.querySelectorAll('input');
  for (let index = 0; index < inputs.length; index += 1) {
    inputs[index].value = "";
  }
});

// Other Functions
function createStatesList() {
  const statesArray = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];
  const statesList = document.querySelector('#states-list');
  for (const state of statesArray) {
    const newState = document.createElement('option');
    newState.value = state;
    statesList.appendChild(newState);
  }
}

createStatesList();
