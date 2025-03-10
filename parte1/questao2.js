/* 2. Crie um programa utilizando o loop "do...while" para solicitar a senha de acesso ao usuário. O usuário terá um limite de três tentativas para inserir a senha correta.
a)      Se a senha for inserida corretamente dentro do limite de tentativas, exiba a mensagem: "Acesso concedido!"
b)  	Caso contrário, exiba a mensagem: "Senha bloqueada!"*/

let tentativa = 1;
let senha;

do {
    senha = prompt("Digite sua senha: ");
} while(tentativa++ < 3 && senha != "123")

if(tentativa >= 3) {
    alert("Senha bloqueada!");
}
else {
    alert("Acesso concedido!")
}