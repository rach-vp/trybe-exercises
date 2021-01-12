/*
function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);
 */

const testingScope = scope => {
  if (scope) {
    const ifScope = 'I should not be showed out of my scope (if)';
    console.log(`${ifScope}. Great! I'm inside my scope.`);
  } else {
    const elseScope = 'I should not be showed out of my scope (else)';
    console.log(`${elseScope}. Great! I'm inside my scope.`);
  }
}

testingScope(false);
