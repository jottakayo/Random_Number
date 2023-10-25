// function startGame() {
// alert("Boas vindas ao jogo Nº Secreto.")//Alerta de boas vindas
// let secretNumber = parseInt(Math.random() * 50 + 1);//Gera um numero aleatório com o atributo Math.random
// console.log(secretNumber);
// let chosenNumber;//Numero escolhido pelo usuário
// let attempts = 1;//Tentativas do usuário

// // Loop para até o jogador acerte o numero randômico
// while(chosenNumber != secretNumber){
//     let chosenNumber = prompt("Escolha entre 1 e 50.");
//     // Converte a escolha do jogador para número inteiro
//         chosenNumber = parseInt(chosenNumber);
//     if (chosenNumber == secretNumber ) {
//         break
//     }else{
//         if (chosenNumber > secretNumber) {
//             alert(`Você errou o numero, o numero certo é menor que ${chosenNumber} que você escolheu !`)
//         }else{
//             alert(`Você errou o numero, o numero certo é maior que ${chosenNumber} que você escolheu !`)
//         }
//         attempts++;//Armazena o numero de tentativas do usuário.
//     }
// }

// let wordAttempts = attempts > 1 ? 'tentativas' : 'tentativa';//Ajusta a palavra tentativa para tentativa caso seja o nº 1.
// // Atualiza o resultado na página HTML
// document.getElementById("result").textContent = `Você acertou o numero secreto ${secretNumber} com somente ${attempts} ${wordAttempts} !`;
// }

function checkKick () {
    console.log('O botão foi clicado');
}