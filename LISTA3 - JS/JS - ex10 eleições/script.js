var candidatoa=parseInt(prompt("Informe a quantidade de votos do(a) candidato(a) A: "));
var candidatob=parseInt(prompt("Informe a quantidade de votos do(a) candidato(a) B: "));
var candidatoc=parseInt(prompt("Informe a quantidade de votos do(a) candidato(a) C: "));
var votobranco=parseInt(prompt("Informe o total de votos em branco: "));
var votobranco=parseInt(prompt("Informe o total de votos nulos: "));

var votovalido =  candidatoa + candidatob + candidatoc;
var eleitores = votobranco + votonulo + votovalido;

var perc_a = (candidatoa * 100) / eleitores;
var perc_b = (candidatob * 100) / eleitores;
var perc_c = (candidatoc * 100) / eleitores;
var branco_por = ( votobranco * 100) / eleitores;
var nulo_por = (votonulo * 100 ) / eleitores;
var valido_por = (votovalido * 100 ) / eleitores;

document.write("A qauntidade de eleitores é: " + eleitores);
document.write("A porcentagem de votos válidos para o candidato A é de: " + perc_a + "%");
document.write("A porcentagem de votos válidos para o candidato B é de: " + perc_b + "%");
document.write("A porcentagem de votos válidos para o candidato C é de: " + perc_c + "%");
document.write("A porcentagem de votos nulos é de " + nulo_por + "%");
document.write("A porcentagem de votos em branco é de: " + branco_por + "%");

