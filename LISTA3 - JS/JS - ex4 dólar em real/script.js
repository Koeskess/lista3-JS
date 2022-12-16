var cotDolar=parseFloat(prompt("Digite a cotação do dólar: "));
var qtdDolares=parseFloat(prompt("Digite a quantidade de dólares que você possui: "));

var conversao=cotDolar*qtdDolares;
document.write("O valor da conversão em reais é: R$" + conversao);