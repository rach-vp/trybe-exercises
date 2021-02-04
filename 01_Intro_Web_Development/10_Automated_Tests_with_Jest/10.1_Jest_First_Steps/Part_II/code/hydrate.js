function hydrate(string) {
  const drinksArray = string.match(/\d+/g);
  const total = drinksArray.reduce((sum, value) =>sum + parseInt(value), 0);
  return total > 1 ? `${total} copos de água` : `${total} copo de água`;
}

module.exports = hydrate;