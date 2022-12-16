    var A=parseInt(prompt("Informe o primeiro número: "));
    var B=parseInt(prompt("Informe o segundo número: "));
    var C=parseInt(prompt("Informe o terceiro número: "));
    var D=parseInt(prompt("Informe o quarto número: "));
    
    var AmB= A+B;
    var AmC= A+C;
    var AmD= A+D;
    var BmC= B+C;
    var BmD= B+D;
    var CmD= C+D;
   
    var AxB= A*B;
    var AxC= A*C;
    var AxD= A*D;
    var BxC= B*C;
    var BxD= B*D;
    var CxD= C*D;
    
    document.write("Os resultados são: " + "</br>");
    document.write(A + " + " + B + " = " + AmB + "</br>");
    document.write(A + " + " + C + " = " + AmC + "</br>");
    document.write(A + " + " + D + " = " + AmD + "</br>");
    document.write(B + " + " + C + " = " + BmC + "</br>");
    document.write(B + " + " + D + " = " + BmD + "</br>");
    document.write(C + " + " + D + " = " + CmD + "</br>");
    document.write("</br>")
    document.write(A + " x " + B + " = " + AxB + "</br>");
    document.write(A + " x " + C + " = " + AxC + "</br>");
    document.write(A + " x " + D + " = " + AxD + "</br>");
    document.write(B + " x " + C + " = " + BxC + "</br>");
    document.write(B + " x " + D + " = " + BxD + "</br>");
    document.write(C + " x " + D + " = " + CxD + "</br>");
 