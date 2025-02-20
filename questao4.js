/*4.  	Solicite ao usuário cinco números, armazene-os em uma lista e, em seguida, exiba todos os números na tela.*/

let entrada = prompt("Digite uma lista de 5 números separados por uma virgula (,): ");
let listaNumeros = entrada.split(",");
alert("Os números inseridos foram: "+listaNumeros);