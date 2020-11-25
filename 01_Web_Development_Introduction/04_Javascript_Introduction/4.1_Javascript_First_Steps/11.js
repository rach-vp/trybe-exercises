// Calcular o salário líquido de um trabalhador CLT com base no valor inputado

let salarioBruto = 3000;

if (salarioBruto < 0) {
    console.log('Valor do salário bruto inválido');
}
else if (salarioBruto <= 1556.94) {
    salarioBase = salarioBruto * 0.92;
    console.log('Seu salário líquido é R$' + calculoIR(salarioBase));
}
else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    salarioBase = salarioBruto * 0.91;
    console.log('Seu salário líquido é R$' + calculoIR(salarioBase));
}
else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    salarioBase = salarioBruto * 0.89;
    console.log('Seu salário líquido é R$' + calculoIR(salarioBase));
}
else if (salarioBruto > 5189.82) {
    salarioBase = salarioBruto - 570.88;
    console.log('Seu salário líquido é R$' + calculoIR(salarioBase));
}

function calculoIR (salarioBase) {
    salarioLiquido = salarioBase;
    if (salarioBase <= 1903.98) {
        salarioLiquido = salarioBase;
    }
    else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
        salarioLiquido -= salarioBase * 0.075 - 142.8;
    }
    else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
        salarioLiquido -= salarioBase * 0.15 - 354.8;
    }
    else if (salarioBase > 3751.06 && salarioBase <= 4664.68) {
        salarioLiquido -= salarioBase * 0.225 - 636.13;
    }
    else {
        salarioLiquido -= salarioBase * 0.275 - 869.36;
    }
    return (salarioLiquido);
}