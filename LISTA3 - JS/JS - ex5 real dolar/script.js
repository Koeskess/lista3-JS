var cotDolar=parseFloat(prompt("Digite a cotação do dólar: "));
var qtdreais=parseFloat(prompt("Digite a quantidade de reais que você possui: "));

var conversao=qtdreais /cotDolar;
document.write("O valor da conversão em reais é: R$" + conversao);

