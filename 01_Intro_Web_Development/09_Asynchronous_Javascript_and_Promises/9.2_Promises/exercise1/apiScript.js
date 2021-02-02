const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {
  return fetch(API_URL, myObject)
    .then(response => response.json())
    .then(response => response.joke);
};

window.onload = async () => document.querySelector('#jokeContainer').innerText = await fetchJoke();
