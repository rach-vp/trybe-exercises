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

const changeLesson = (lesson, theme, subject) => lesson[theme] = subject;

const listKeys = obj => Object.keys(obj);

const objectSize = obj => Object.keys(obj).length;

const listValues = obj => Object.values(obj);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const students = obj => {
  sum = 0;
  for (let index in obj) {
    sum += obj[index]['numeroEstudantes'];
  }
  return sum;
}

const valueByNumber = (obj, number) => Object.values(obj)[number];

const isPairInObj = (obj, key, value) => {
  let is = false;
  for (let index in Object.entries(obj)) {
    entry = Object.entries(obj)[index];
    if (entry === [key, value]) is = true;
  }
  return is;
}

console.log(isPairInObj(lesson3, 'turno', 'noite'));
// Output: true,
console.log(isPairInObj(lesson3, 'materia', 'Maria Clara'));
// Output: false
