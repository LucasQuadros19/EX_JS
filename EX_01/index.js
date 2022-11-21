let salario;
let percentual;
let resultado;
salario=prompt("qual o salario atual:");
percentual=prompt("percentual de reajuste:");
salario=parseInt(salario);
percentual=parseInt(percentual);
resultado = salario+(salario*(percentual/100));
alert("novo salario:"+resultado);
