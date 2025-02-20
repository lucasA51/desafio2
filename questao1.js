/* Utilize o comando de repetição “while”, para solicitar que o usuário informe um número. O programa deve continuar executando até que o usuário digite o número 3, momento em que deverá se encerrar.*/

let chute = prompt("Digite aqui o número em que eu estou pensando: ")
while(chute != 3) {
   chute = prompt("Não é o número em que estou pensando! Tente novamente: ")
}
alert("Você acertou o número em que estou pensando é 3.")