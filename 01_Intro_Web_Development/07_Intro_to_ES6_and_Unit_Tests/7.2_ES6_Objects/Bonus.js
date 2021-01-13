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

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const presentStudents = obj => {
  sum = 0;
  for (let index in obj) {
    sum += obj[index]['numeroEstudantes'];
  }
  return sum;
};

const report = (obj, prof) => {
  classes = [];
  students = 0;
  for (let index in obj) {
    if (Object.values(obj[index]).includes(prof)) {
      classes.push(obj[index].materia);
      students += obj[index].numeroEstudantes;
    }
  }
  return {'professor': prof, 'aulas': classes, 'estudantes': students,};
};

console.log(report(allLessons, 'Maria Clara'));
