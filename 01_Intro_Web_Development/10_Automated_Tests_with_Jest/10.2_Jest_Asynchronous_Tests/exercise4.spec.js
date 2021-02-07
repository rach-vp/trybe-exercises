const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

const url = 'https://api.github.com/orgs/tryber/repos';
const toDoList = 'sd-01-week4-5-project-todo-list';
const memeGenerator = 'https://api.github.com/orgs/tryber/repos';
// getRepos(url).then(response => console.log(response
//   .filter(repo => repo === toDoList || repo === memeGenerator)));


describe('test function getRepos', () => {
  test('if To Do List repo is on the list of repositories', () => {
    getRepos(url).then(result => {
      expect(result).toContain(toDoList);
      expect(result).toContain(memeGenerator); //There isn't so test breaks
    });
  });
});
