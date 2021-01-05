function createFullAddress() {
  const addressSections = document.querySelector('#address-container');
  const userAddress = document.querySelector('#user-address');
  const userCity = document.querySelector('#user-city');
  const userState = document.querySelector('#user-state');
  const fullAddress = document.createElement('p');
  fullAddress.innerText = `${userAddress.value}\n${userCity.value}/${userState.value}`;
  addressSections.appendChild(fullAddress);
}

function createOtherInfoSection() {
  const otherInfo = document.querySelector('#other-info-container');
  const userEmail = document.querySelector('#user-email');
  const userCPF = document.querySelector('#user-cpf');
  const email = document.createElement('p');
  const CPF = document.createElement('p');
  email.innerText = userEmail.value;
  CPF.innerText = userCPF.value;
  otherInfo.appendChild(email);
  otherInfo.appendChild(CPF);
}

function createNewHeader() {
  const userName = document.querySelector('#full-name');
  const nameHeader = document.createElement('h2');
  const cvHeader = document.querySelector('#cv-header');
  nameHeader.innerText = userName.value;
  cvHeader.appendChild(nameHeader);
}

function createPersonalSection() {
  createNewHeader();
  createOtherInfoSection();
  createFullAddress();
}

function createCVResumeSection() {
  const resume = document.querySelector('#cv-resume-container');
  const cvResume = document.querySelector('#cv-resume');
  const newResume = document.createElement('p');
  newResume.innerText = cvResume.value;
  resume.appendChild(newResume);
}

function createLastJobSection() {
  const lastJobSection = document.querySelector('#last-job-container');
  const lastJobDescription = [
    document.querySelector('#last-role').value,
    document.querySelector('#beginning-date').value,
    document.querySelector('#last-role-description').value
  ]
  for (let index in lastJobDescription) {
    const newContent = document.createElement('p');
    newContent.innerText = lastJobDescription[index];
    lastJobSection.appendChild(newContent);
  }
}

function createJobSection() {
  createCVResumeSection();
  createLastJobSection();
}

// Event Listeners
const clearButton = document.querySelector('#clear-btn');
const submitButton = document.querySelector('#submit-btn');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  createPersonalSection();
  createJobSection();
});
clearButton.addEventListener('click', () => {
  const inputs = document.querySelectorAll('input');
  for (let index = 0; index < inputs.length; index += 1) {
    inputs[index].value = "";
  }
  document.querySelector('textarea').value = "";
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
