const fetch = require('node-fetch');
const url = 'https://dog.ceo/api/breeds/image/random';

const fetchDoggo = async () => {
  try {
    const image = await fetch(url).then(res => res.json());
    if (image.status !== 'success') throw new Error('Error fetching doggo img D=');
    return image.message;
  } catch (error) {
    return undefined;
  }
};

module.exports = fetchDoggo;
