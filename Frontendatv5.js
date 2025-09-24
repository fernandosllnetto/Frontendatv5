// Questão 1 
let populacaoA = 80000;
let populacaoB = 200000;
let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA += populacaoA * 0.03; // 3%
    populacaoB += populacaoB * 0.015; // 1.5%
    anos++;
}

console.log("Número de anos necessários: " + anos);

// Questão 2  
let n = parseInt(prompt("Quantos números deseja informar?"));
let numeros = [];
let soma = 0;

for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt("Digite o " + (i + 1) + "º número:"));
    numeros.push(num);
    soma += num;
}

let menor = Math.min(...numeros);
let maior = Math.max(...numeros);

console.log("Menor valor: " + menor);
console.log("Maior valor: " + maior);
console.log("Soma dos valores: " + soma);

// Questão 3 
let n = parseInt(prompt("Quantos números deseja informar?"));
let numeros = [];
let soma = 0;

for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt("Digite o " + (i + 1) + "º número:"));
    numeros.push(num);
    soma += num;
}

let menor = Math.min(...numeros);
let maior = Math.max(...numeros);

console.log("Menor valor: " + menor);
console.log("Maior valor: " + maior);
console.log("Soma dos valores: " + soma);

// Questão 4.1
let salario = 1000;
let percentual = 0.0015; // 0,15% em decimal
let ano = 1996;

while (ano <= new Date().getFullYear()) {
    salario += salario * percentual;
    percentual *= 2; // dobra o percentual a cada ano
    ano++;
}

console.log("Salário atual: R$ " + salario.toFixed(2));

// Questão 4.2
let salarioInicial = parseFloat(prompt("Informe o salário inicial do funcionário:"));
let salarioAtual = salarioInicial;
let percentual = 0.0015;
let ano = 1996;

while (ano <= new Date().getFullYear()) {
    salarioAtual += salarioAtual * percentual;
    percentual *= 2;
    ano++;
}

console.log("Salário atual: R$ " + salarioAtual.toFixed(2));

// Questão 5 
function calcularCirculo() {
    let raio = parseFloat(prompt("Informe o raio do círculo:"));
    let area = Math.PI * Math.pow(raio, 2);
    let perimetro = 2 * Math.PI * raio;

    console.log("Área do círculo: " + area.toFixed(2));
    console.log("Perímetro do círculo: " + perimetro.toFixed(2));
}

calcularCirculo();

// Questão 6 
function calcularInvestimento() {
    let capital = parseFloat(prompt("Informe o capital inicial investido:"));
    let taxa = parseFloat(prompt("Informe a taxa de juros mensal (%):"));
    let tempo = parseInt(prompt("Informe o tempo do investimento (meses):"));

    let montante = capital * Math.pow((1 + taxa / 100), tempo);

    console.log("O montante do investimento será: R$ " + montante.toFixed(2));
}

calcularInvestimento();


