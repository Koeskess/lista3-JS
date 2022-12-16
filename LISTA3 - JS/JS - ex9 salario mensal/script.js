var Smensal=parseFloat(prompt("Informe seu salário mensal: "));
var percentual=parseInt(prompt("Informe o percentual do reajuste: "));

var Nsalario= Smensal + (Smensal * percentual / 100);
document.write("O seu novo salário é igual a: R$ " + Nsalario);