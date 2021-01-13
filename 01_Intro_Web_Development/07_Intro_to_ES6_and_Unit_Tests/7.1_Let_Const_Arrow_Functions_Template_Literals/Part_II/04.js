// Function 1
const phrase = 'Tryber x here!';
const word = 'Raquel'

const replaceX = (phrase, word) => phrase.replace('x', word);

console.log(`Replacing the word x for "${word}" in phrase "${phrase}" results in "${replaceX(phrase, word)}"`);

//Function 2
const skills = ['CSS', 'JavaScript', 'Python', 'Ruby', 'Graphic Analysis'];

const catSkills = (phrase, skillsArray) => {
  skillsArray.sort();
  finalString = `${phrase} My main skills are:\n`;
  for (let index = 0; index < skillsArray.length; index += 1) {
    finalString += `  - ${skillsArray[index]}\n`
  }
  return finalString;
};

console.log(catSkills(replaceX(phrase, word), skills));
