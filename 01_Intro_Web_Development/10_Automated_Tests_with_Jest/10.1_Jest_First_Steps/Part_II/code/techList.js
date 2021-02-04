function techList(arrayTech, name) {
  return arrayTech.length === 0 ? 'Vazio!' :
    arrayTech.sort().map(tech => ({ tech, name }));
}

module.exports = techList;