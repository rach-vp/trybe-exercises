// Calcular o salário líquido de um trabalhador CLT com base no valor inputado

let salarioBruto = 3000;
if (salarioBruto < 0) {
    console.log('Valor do salário bruto inválido');
} else {
    console.log(`Seu salário líquido é R$${calculoIR(salarioBase(salarioBruto))}.`);
}

function salarioBase(salarioBruto) {
    if (salarioBruto <= 1556.94) {
        return(salarioBruto * 0.92);
    } else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
        return(salarioBruto * 0.91);
    } else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
        return(salarioBruto * 0.89);
    } else {
        return(salarioBruto - 570.88);
    }
}

function calculoIR (salarioBase) {
    if (salarioBase <= 1903.98) {
        return(salarioBase);
    } else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
        return(salarioBase -= salarioBase * 0.075 - 142.8);
    } else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
        return(salarioBase -= salarioBase * 0.15 - 354.8);
    } else if (salarioBase > 3751.06 && salarioBase <= 4664.68) {
        return(salarioBase -= salarioBase * 0.225 - 636.13);
    } else {
        return(salarioBase -= salarioBase * 0.275 - 869.36);
    }
}
